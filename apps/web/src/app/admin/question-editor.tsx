'use client';

import { useEffect, useMemo, useState } from 'react';

type Option = { id: string; content: string; position: number; isCorrect: boolean };
type Version = { id: string; content: string; explanation: string | null; source: string | null; options: Option[] };
type Question = { id: string; position: number; versions: Version[] };
const api = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';

export function QuestionEditor() {
  const [items, setItems] = useState<Question[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [saving, setSaving] = useState(false);
  const selected = useMemo(() => items.find((item) => item.id === selectedId), [items, selectedId]);
  const version = selected?.versions[0];
  const [content, setContent] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [message, setMessage] = useState('Đang tải ngân hàng câu hỏi…');

  useEffect(() => { void fetch(`${api}/questions`).then((response) => response.json()).then((data: Question[]) => { setItems(data); setSelectedId(data[0]?.id ?? ''); setMessage(''); }).catch(() => setMessage('Không kết nối được API. Hãy chạy dịch vụ API tại cổng 3001.')); }, []);
  useEffect(() => { if (version) { setContent(version.content); setOptions(version.options); } }, [version]);

  async function save() {
    if (!selected || options.filter((item) => item.isCorrect).length !== 1) return setMessage('Chọn đúng một đáp án chính xác.');
    setSaving(true); setMessage('');
    const response = await fetch(`${api}/questions/${selected.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content, options: options.map(({ content: optionContent, isCorrect }) => ({ content: optionContent, isCorrect })) }) });
    setSaving(false); setMessage(response.ok ? 'Đã lưu phiên bản mới.' : 'Không thể lưu thay đổi.');
  }
  return <main className="adminPage"><header className="hero"><p className="eyebrow">Quản trị nội bộ</p><h1>Chỉnh sửa ngân hàng 430 câu</h1><p className="lead">Mỗi lần lưu sẽ tạo phiên bản mới của câu hỏi.</p></header><div className="adminLayout"><aside><label>Câu hỏi<select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>{items.map((item) => <option key={item.id} value={item.id}>Câu {item.position}</option>)}</select></label></aside><section className="editorCard"><p role="status">{message}</p>{selected && <><label>Nội dung câu hỏi<textarea value={content} onChange={(event) => setContent(event.target.value)} /></label>{options.map((option, index) => <label key={option.id || index}>Phương án {'ABCD'[index]}<textarea value={option.content} onChange={(event) => setOptions((old) => old.map((entry, pos) => pos === index ? { ...entry, content: event.target.value } : entry))} /><span><input type="radio" checked={option.isCorrect} onChange={() => setOptions((old) => old.map((entry, pos) => ({ ...entry, isCorrect: pos === index })))} name="correct" /> Đáp án đúng</span></label>)}<button className="primaryButton" disabled={saving} onClick={() => void save()}>{saving ? 'Đang lưu…' : 'Lưu thay đổi'}</button></>}</section></div></main>;
}
