const questions = [
  {
    "question": "Trường hợp nào sau đây bắt buộc phải lựa chọn nhà thầu theo quy định tại Luật Đấu thầu?",
    "options": [
      "Gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của cơ quan nhà nước",
      "Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước",
      "Lựa chọn nhà thầu của đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước",
      "Việc thuê, mua, thuê mua nhà, trụ sở, tài sản gắn liền với đất"
    ],
    "correct": "A"
  },
  {
    "question": "Chọn phương án đúng về phạm vi điều chỉnh của Luật Đấu thầu?",
    "options": [
      "Quy định về quản lý nhà nước đối với hoạt động đấu thầu",
      "Quy định về thẩm quyền và trách nhiệm của các cơ quan, tổ chức, cá nhân trong hoạt động đấu thầu",
      "Quy định về hoạt động lựa chọn nhà thầu thực hiện gói thầu, hoạt động lựa chọn nhà đầu tư thực hiện dự án đầu tư kinh doanh",
      "Tất cả phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào sau đây không thuộc đối tượng áp dụng của Luật Đấu thầu?",
    "options": [
      "Gói thầu mua thuốc, hoá chất, vật tư xét nghiệm sử dụng nguồn ngân sách nhà nước của bệnh viện công lập A",
      "Gói thầu xây dựng đường giao thông sử dụng vốn đầu tư công do Ban Quản lý dự án đầu tư xây dựng công trình tỉnh A làm chủ đầu tư",
      "Gói thầu mua sắm trang thiết bị làm việc sử dụng vốn nhà nước của Văn phòng UBND tỉnh A",
      "Hoạt động mua phần mềm kế toán của hộ kinh doanh cá thể"
    ],
    "correct": "D"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, gói thầu nào là gói thầu cung cấp dịch vụ tư vấn?",
    "options": [
      "Thiết kế và cung cấp hệ thống xử lý nước thải",
      "Gói thầu lập nhiệm vụ quy hoạch vùng",
      "Gói thầu quảng cáo trên nền tảng xã hội và phát sóng trên VTV",
      "Gói thầu mua phần mềm kế toán MISA"
    ],
    "correct": "B"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, gói thầu nào là gói thầu cung cấp dịch vụ phi tư vấn?",
    "options": [
      "Gói thầu in sổ công tác của tỉnh A",
      "Gói thầu thuê kiểm toán dự án",
      "Gói thầu mua phần mềm kế toán hỗ trợ doanh nghiệp khởi nghiệp sáng tạo, doanh nghiệp nhỏ do phụ nữ làm chủ",
      "Gói thầu xây dựng trụ sở làm việc của tỉnh A."
    ],
    "correct": "A"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, đấu thầu là gì?",
    "options": [
      "Là quá trình lựa chọn nhà thầu để ký kết, thực hiện hợp đồng cung cấp dịch vụ tư vấn, dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
      "Là quá trình lựa chọn nhà đầu tư để ký kết, thực hiện hợp đồng dự án đầu tư kinh doanh trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
      "Là quá trình lựa chọn đơn vị để thực hiện hợp đồng thông qua các quy trình, thủ tục do pháp luật đấu thầu quy định.",
      "Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đấu thầu quốc tế là gì?",
    "options": [
      "Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu",
      "Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu, trong đó nhà thầu trong nước bắt buộc phải liên danh với nhà thầu nước ngoài",
      "Là hoạt động đấu thầu chỉ nhà thầu quốc tế được phép tham dự thầu",
      "Là hoạt động đấu thầu chỉ nhà thầu trong nước được phép tham dự thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Giá đề nghị trúng thầu là gì?",
    "options": [
      "Là giá dự thầu của nhà thầu ghi trong quyết định phê duyệt kết quả lựa chọn nhà thầu.",
      "Là giá dự thầu của nhà thầu được đề nghị trúng thầu sau khi đã được sửa lỗi, hiệu chỉnh sai lệch theo yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu, trừ đi giá trị giảm giá (nếu có)",
      "Là giá dự thầu của nhà thầu chưa tính sửa lỗi, hiệu chỉnh sai lệch và giá trị giảm giá (nếu có)",
      "Là giá trị ghi trong hợp đồng giữa chủ đầu tư và nhà thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, hàng hóa gồm?",
    "options": [
      "Máy móc, thiết bị, nguyên liệu, nhiên liệu, vật liệu, vật tư, phụ tùng; sản phẩm; phương tiện; hàng tiêu dùng, phần mềm thương mại",
      "Thuốc, hóa chất, vật tư xét nghiệm, thiết bị y tế",
      "Phương án A và B đều đúng",
      "Logistics, bảo hiểm, quảng cáo, nghiệm thu chạy thử, chụp ảnh vệ tinh"
    ],
    "correct": "C"
  },
  {
    "question": "Đối tượng được hưởng ưu đãi trong lựa chọn nhà thầu là gì?",
    "options": [
      "Hàng hóa có xuất xứ Việt Nam",
      "Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      "Sản phẩm, dịch vụ thân thiện môi trường theo quy định của pháp luật về bảo vệ môi trường",
      "Tất cả các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Nhà thầu trong nước nào được hưởng ưu đãi trong lựa chọn nhà thầu?",
    "options": [
      "Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      "Nhà thầu trong nước tham dự thầu với tư cách độc lập hoặc liên danh với nhà thầu trong nước khác khi tham dự đấu thầu quốc tế",
      "Nhà thầu có sử dụng lao động nữ, thương binh, người khuyết tật hoặc người dân tộc thiểu số",
      "Tất cả các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào sau đây cơ quan, tổ chức, doanh nghiệp được tự quyết định việc lựa chọn nhà thầu trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình?",
    "options": [
      "Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của cơ quan nhà nước",
      "Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của đơn vị sự nghiệp công lập bảo đảm một phần chi thường xuyên",
      "Thực hiện gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của doanh nghiệp nhà nước",
      "Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước, đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên và chi đầu tư, đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước"
    ],
    "correct": "D"
  },
  {
    "question": "Ngôn ngữ sử dụng trong đấu thầu quốc tế là gì?",
    "options": [
      "Tiếng Việt",
      "Tiếng Đức",
      "Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      "Tiếng Đức hoặc tiếng Anh"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu quốc tế, trường hợp ngôn ngữ sử dụng trong hồ sơ mời thầu là tiếng Việt và tiếng Anh thì khi tham dự thầu, nhà thầu sử dụng ngôn ngữ gì?",
    "options": [
      "Chỉ tiếng Việt",
      "Chỉ tiếng Anh",
      "Tiếng Việt hoặc tiếng Anh",
      "Bắt buộc cả tiếng Việt và tiếng Anh"
    ],
    "correct": "C"
  },
  {
    "question": "Điều kiện để tổ chức đấu thầu quốc tế lựa chọn nhà thầu thực hiện gói thầu mua sắm hàng hóa là gì?",
    "options": [
      "Gói thầu mua sắm hàng hóa thông dụng, đơn giản, có sẵn trên thị trường",
      "Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước sản xuất được và đáp ứng các yêu cầu về kỹ thuật, chất lượng, giá nhưng chủ đầu tư yêu cầu phải mua hàng hóa nhập khẩu",
      "Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước không sản xuất được hoặc sản xuất được nhưng không đáp ứng một trong các yêu cầu về kỹ thuật, chất lượng, giá",
      "Gói thầu mua sắm hàng hóa thông dụng đã được nhập khẩu và chào bán tại Việt Nam nhưng hàng hóa đó trong nước không sản xuất được"
    ],
    "correct": "C"
  },
  {
    "question": "Trong trường hợp hủy thầu, toàn bộ hồ sơ liên quan đến quá trình lựa chọn nhà thầu của gói thầu đó có cần phải lưu trữ không?",
    "options": [
      "Không cần lưu trữ, hủy hồ sơ ngay sau khi quyết định hủy thầu được ban hành nhưng phải đảm bảo thông tin không bị tiết lộ",
      "Không cần lưu trữ, trả lại hồ sơ cho nhà thầu theo nguyên trạng ngay sau khi quyết định hủy thầu được ban hành",
      "Có cần lưu trữ, trong thời hạn 05 năm kể từ ngày quyết định hủy thầu được ban hành",
      "Có cần lưu trữ, trong thời hạn 03 năm kể từ ngày quyết định hủy thầu được ban hành"
    ],
    "correct": "C"
  },
  {
    "question": "Trường hợp hồ sơ đề xuất về tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật, nhà thầu từ chối nhận lại hồ sơ đề xuất của mình thì Chủ đầu tư phải xử lý như thế nào?",
    "options": [
      "Chủ đầu tư xem xét, quyết định việc hủy hồ sơ nhưng phải đảm bảo thông tin không bị tiết lộ",
      "Chủ đầu tư phải lưu trữ theo quy định của pháp luật về lưu trữ",
      "Chủ đầu tư lưu trữ tối thiểu 05 năm",
      "Tất cả các phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Hồ sơ hoàn công và quyết toán của gói thầu được lưu trữ theo quy định nào?",
    "options": [
      "Quy định nội bộ của nhà thầu",
      "Quy định của tư vấn giám sát",
      "Quy định của pháp luật về lưu trữ",
      "Tất cả phương án trên đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu xây lắp đấu thầu không qua mạng, hồ sơ đề xuất tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật sẽ được trả lại khi nào?",
    "options": [
      "Khi gửi thư mời thương thảo",
      "Khi kết thúc giai đoạn đánh giá kỹ thuật",
      "Khi hoàn trả bảo đảm dự thầu của nhà thầu không được lựa chọn hoặc đăng tải kết quả lựa chọn nhà thầu",
      "Khi ký hợp đồng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu quốc tế, hồ sơ mời thầu được phát hành như thế nào?",
    "options": [
      "HSMT được phát hành trên Hệ thống mạng đấu thầu quốc gia; Nhà thầu nộp tiền mua bản điện tử hồ sơ mời thầu khi nộp hồ sơ dự thầu",
      "HSMT được bán vào giờ hành chính từ thứ 2 tới thứ 6 tại địa chỉ do Chủ đầu tư quy định",
      "Phương án A và B đều đúng",
      "Phương án A và B đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu sử dụng vốn ngân sách nhà nước, tiền bán bản điện tử hồ sơ mời thầu, hồ sơ yêu cầu sẽ được xử lý như thế nào?",
    "options": [
      "Sử dụng theo quy chế tài chính của chủ đầu tư",
      "Nộp vào ngân sách nhà nước theo quy định của Luật Ngân sách nhà nước",
      "Sử dụng theo cơ chế khoán chi",
      "Tất cả các đáp án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Chi phí đăng tải quyết định phê duyệt kế hoạch lựa chọn nhà thầu và quyết định phê duyệt kết quả lựa chọn nhà thầu lên Hệ thống mạng đấu thầu quốc gia đối với gói thầu chỉ định thầu là bao nhiêu?",
    "options": [
      "220.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      "330.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      "Miễn phí",
      "110.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)"
    ],
    "correct": "C"
  },
  {
    "question": "Thành viên tổ chuyên gia cần có tối thiểu bao nhiêu năm kinh nghiệm trong lĩnh vực liên quan?",
    "options": [
      "01 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      "02 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      "03 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      "Không có quy định về số năm kinh nghiệm"
    ],
    "correct": "C"
  },
  {
    "question": "Đơn vị sự nghiệp công lập A đã trúng thầu gói thầu tổ chức lớp đào tạo cán bộ cho UBND tỉnh X sử dụng vốn ngân sách địa phương. Đơn vị sự nghiệp công lập A có phải tổ chức lựa chọn nhà thầu theo Luật Đấu thầu để thuê dịch vụ hậu cần (như địa điểm ăn nghỉ, photo tài liệu, hội trường tổ chức) hay không?",
    "options": [
      "Phải lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      "Căn cứ vào hợp đồng quy định giữa đơn vị A và UBND tỉnh X",
      "Đơn vị A được tự quyết định việc mua sắm trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình",
      "Căn cứ theo phân cấp quyết định mua sắm của UBND tỉnh X"
    ],
    "correct": "C"
  },
  {
    "question": "Sở Y tế tỉnh A được doanh nghiệp trong nước tài trợ 5 tỷ đồng để mua sắm thuốc phục vụ khám chữa bệnh cho người nghèo, hỏi Sở Y tế có phải tổ chức đấu thầu thuốc theo quy định của Luật Đấu thầu không?",
    "options": [
      "Sở Y tế A được tự quyết định việc mua sắm trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình trong trường hợp nhà tài trợ yêu cầu không lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      "Sở Y tế A phải tổ chức lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      "Trong mọi trường hợp Sở Y tế A không phải thực hiện theo Luật Đấu thầu do đây là nguồn doanh nghiệp trong nước tài trợ",
      "Phải xin ý kiến của UBND tỉnh A để có cơ sở xác định có phải tổ chức lựa chọn nhà thầu theo Luật Đấu thầu hay không"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu nào sau đây thuộc trường hợp được áp dụng chào hàng cạnh tranh?",
    "options": [
      "Tất cả gói thầu hàng hoá có giá không quá 10 tỷ đồng",
      "Gói thầu dịch vụ phi tư vấn thông dụng, đơn giản có giá không quá 10 tỷ đồng",
      "Gói thầu dịch vụ tư vấn thông dụng, đơn giản có giá không quá 5 tỷ đồng",
      "Gói thầu xây lắp công trình đơn giản đã có dự toán được phê duyệt có giá không quá 15 tỷ đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa thông dụng, sẵn có trên thị trường có giá gói thầu 05 tỷ đồng thì kế hoạch lựa chọn nhà thầu phê duyệt áp dụng hình thức lựa chọn nhà thầu nào sau đây?",
    "options": [
      "Chỉ được áp dụng hình thức chào hàng cạnh tranh",
      "Được áp dụng hình thức chào hàng cạnh tranh hoặc đấu thầu rộng rãi",
      "Bắt buộc áp dụng hình thức chỉ định thầu",
      "Được áp dụng hình thức chỉ định thầu hoặc chào hàng cạnh tranh hoặc đấu thầu rộng rãi"
    ],
    "correct": "B"
  },
  {
    "question": "Hạn mức chỉ định thầu đối với gói thầu không hình thành dự án thuộc dự toán mua sắm thường xuyên là:",
    "options": [
      "500 triệu đồng",
      "800 triệu đồng",
      "01 tỷ đồng",
      "300 triệu đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Hạn mức chỉ định thầu đối với gói thầu mua sắm hàng hóa thuộc dự án đầu tư là:",
    "options": [
      "800 triệu đồng",
      "500 triệu đồng",
      "01 tỷ đồng",
      "02 tỷ đồng"
    ],
    "correct": "D"
  },
  {
    "question": "Phương án nào không phải là một trong các hình thức lựa chọn nhà thầu được phê duyệt trong kế hoạch lựa chọn nhà thầu?",
    "options": [
      "Đấu thầu rộng rãi",
      "Đấu thầu hạn chế",
      "Mua sắm trực tiếp",
      "Đấu thầu qua mạng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu lựa chọn tư vấn là tổ chức có giá gói thầu là 500 triệu đồng áp dụng hình thức lựa chọn nhà thầu nào?",
    "options": [
      "Chỉ được áp dụng hình thức chỉ định thầu",
      "Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi",
      "Áp dụng hình thức chào hàng cạnh tranh",
      "Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi hoặc chào hàng cạnh tranh"
    ],
    "correct": "B"
  },
  {
    "question": "Chọn phương án đúng về hạn mức đối với đấu thầu rộng rãi?",
    "options": [
      "Không quy định hạn mức áp dụng",
      "Trên 20 tỷ đồng",
      "Trên 10 tỷ đồng",
      "Trên 20 tỷ đồng đối với xây lắp, hàng hoá; trên 10 tỷ đồng đối với gói thầu dịch vụ tư vấn, phi tư vấn"
    ],
    "correct": "A"
  },
  {
    "question": "Chọn phương án đúng về loại gói thầu đối với hình thức mua sắm trực tiếp?",
    "options": [
      "Chỉ gói thầu hàng hoá",
      "Chỉ gói thầu xây lắp",
      "Chỉ gói thầu phi tư vấn",
      "Gói thầu hàng hóa và phi tư vấn"
    ],
    "correct": "A"
  },
  {
    "question": "Đâu không phải là điều kiện để áp dụng mua sắm trực tiếp?",
    "options": [
      "Nhà thầu đã trúng thầu thông qua đấu thầu rộng rãi, đấu thầu hạn chế và đã ký hợp đồng gói thầu thực hiện gói thầu trước đó",
      "Thời gian từ khi ký hợp đồng gói thầu trước đến ngày phê duyệt kết quả mua sắm trực tiếp không quá 12 tháng",
      "Đơn giá các phần việc thuộc gói thầu mua sắm trực tiếp không vượt đơn giá phần việc tương ứng của gói thầu đã ký trước đó thuộc gói thầu tương tự đã ký hợp đồng trước đó, đồng thời, phù hợp với giá thị trường tại thời điểm hoàn thiện hợp đồng",
      "Chủ đầu tư được áp dụng mua sắm trực tiếp nhiều lần đối với các loại hàng hóa thuộc gói thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Hãy chọn phương án đúng về hình thức đặt hàng?",
    "options": [
      "Là một trong các hình thức lựa chọn nhà thầu",
      "Pháp luật quản lý ngành, lĩnh vực quy định về quy trình, thủ tục đặt hàng khác với quy trình, thủ tục của pháp luật về đấu thầu thì áp dụng quy định của pháp luật về đấu thầu.",
      "Đặt hàng chỉ được áp dụng cho sản phẩm, dịch vụ công",
      "Đặt hàng chỉ áp dụng đối với nguồn chi thường xuyên ngân sách nhà nước, không được áp dụng đối với nguồn vốn khác"
    ],
    "correct": "A"
  },
  {
    "question": "Kế hoạch lựa chọn nhà thầu của dự án thuộc đối tượng áp dụng của Luật Đấu thầu bắt buộc phải đăng tải ở đâu?",
    "options": [
      "Hệ thống mạng đấu thầu quốc gia",
      "Báo Tài chính-Đầu tư",
      "Cổng Thông tin điện tử của Bộ, ngành",
      "Phương án A và B đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Chậm nhất là bao nhiêu ngày thì kế hoạch lựa chọn nhà thầu phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      "05 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      "07 ngày kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      "07 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      "10 ngày kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành"
    ],
    "correct": "A"
  },
  {
    "question": "Kế hoạch lựa chọn nhà thầu bao gồm nội dung nào sau đây?",
    "options": [
      "Giá gói thầu",
      "Thời gian thực hiện hợp đồng",
      "Giám sát hoạt động đấu thầu",
      "Cả 3 phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với nội dung mua sắm có giá không quá 50 triệu đồng thì được thực hiện như thế nào?",
    "options": [
      "Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm trên cơ sở tiết kiệm, hiệu quả, bảo đảm đầy đủ hoá đơn, chứng từ",
      "Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm theo giá công khai, giá niêm yết và không cần hoá đơn, chứng từ",
      "Được hình thành gói thầu để thực hiện lựa chọn nhà thầu theo một trong hình thức lựa chọn nhà thầu (đấu thầu rộng rãi, chào hàng cạnh tranh, chỉ định thầu    ) nhưng phải lập kế hoạch lựa chọn nhà thầu",
      "Phương án A và C đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Bảo đảm cạnh tranh trong đấu thầu thuộc nội dung đánh giá về?",
    "options": [
      "Tư cách hợp lệ",
      "Năng lực, kinh nghiệm",
      "Kỹ thuật",
      "Tài chính"
    ],
    "correct": "A"
  },
  {
    "question": "Nhà thầu tham gia đấu thầu gói thầu hàng hóa phải độc lập với chủ thể nào sau đây?",
    "options": [
      "Phải độc lập với nhà thầu tư vấn lập hồ sơ mời thầu gói thầu hàng hóa",
      "Phải độc lập với nhà thầu khác khi tham gia đấu thầu rộng rãi",
      "Phải độc lập với nhà thầu tư vấn lập kế hoạch tổng thể lựa chọn nhà thầu",
      "Phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Nhận định nào sau đây không phù hợp với quy định về bảo đảm cạnh tranh trong đấu thầu?",
    "options": [
      "Nhà thầu tham dự thầu phải độc lập với chủ đầu tư, trừ trường hợp: nhà thầu là đơn vị sự nghiệp công lập thuộc cơ quan quản lý nhà nước có chức năng, nhiệm vụ được giao phù hợp với tính chất gói thầu của cơ quan quản lý nhà nước đó; đơn vị sự nghiệp công lập và doanh nghiệp có cùng một cơ quan trực tiếp quản lý, góp vốn; các đơn vị sự nghiệp công lập có cùng một cơ quan trực tiếp quản lý",
      "Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn quản lý dự án, tư vấn giám sát",
      "Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn lập, thẩm tra, thẩm định hồ sơ thiết kế, dự toán",
      "Nhà thầu thực hiện hợp đồng phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu."
    ],
    "correct": "D"
  },
  {
    "question": "Nội dung nào sau đây không thuộc quy định về bảo đảm cạnh tranh trong đấu thầu khi nhà thầu tham dự thầu đấu thầu rộng rãi gói thầu EPC, EP, EC?",
    "options": [
      "Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra thiết kế FEED",
      "Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo nghiên cứu khả thi trong trường hợp không lập thiết kế FEED",
      "Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo kinh tế kỹ thuật trong trường hợp không lập báo cáo nghiên cứu khả thi, không lập thiết kế FEED theo quy định của pháp luật về xây dựng",
      "Nhà thầu tham dự thầu phải độc lập với nhà thầu khác cùng tham dự đấu thầu rộng rãi"
    ],
    "correct": "D"
  },
  {
    "question": "Nội dung nào là nội dung đánh giá tính hợp lệ của hồ sơ dự thầu?",
    "options": [
      "Nhân sự chủ chốt",
      "Hiệu lực của hồ sơ dự thầu",
      "Năng lực tài chính",
      "Việc thực hiện nghĩa vụ kê khai thuế, nộp thuế"
    ],
    "correct": "B"
  },
  {
    "question": "Nội dung nào không phải là tiêu chuẩn đánh giá về tính hợp lệ của hồ sơ dự thầu gói thầu tư vấn?",
    "options": [
      "Hiệu lực của hồ sơ đề xuất về kỹ thuật đáp ứng yêu cầu theo quy định trong hồ sơ mời thầu",
      "Có bản gốc hồ sơ đề xuất về kỹ thuật",
      "Bảo đảm dự thầu hợp lệ",
      "Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa, xây lắp, phi tư vấn, phương pháp để đánh giá về năng lực và kinh nghiệm là?",
    "options": [
      "Sử dụng tiêu chí đạt, không đạt",
      "Sử dụng phương pháp chấm điểm",
      "Kết hợp cả hai phương pháp: tiêu chí đạt, không đạt và phương pháp chấm điểm",
      "Phương pháp dựa trên kỹ thuật"
    ],
    "correct": "A"
  },
  {
    "question": "Tiêu chuẩn đánh giá năng lực kinh nghiệm đối với gói thầu mua sắm hàng hóa bao gồm?",
    "options": [
      "Doanh thu bình quân 3 năm gần nhất",
      "Giấy phép bán hàng của nhà sản xuất",
      "Số năm thành lập của doanh nghiệp",
      "Năng lực quản lý của doanh nghiệp"
    ],
    "correct": "A"
  },
  {
    "question": "Nội dung nào là tiêu chuẩn đánh giá về năng lực và kinh nghiệm không bắt buộc đối với gói thầu mua sắm hàng hóa?",
    "options": [
      "Kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự",
      "Giá trị tài sản ròng của nhà thầu",
      "Doanh thu của nhà thầu",
      "Việc thực hiện nghĩa vụ kê khai thuế, nộp thuế"
    ],
    "correct": "A"
  },
  {
    "question": "Nội dung nào là tiêu chuẩn đánh giá đánh giá về năng lực và kinh nghiệm bắt buộc đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi không qua mạng?",
    "options": [
      "Có bản gốc hồ sơ dự thầu",
      "Có tên trong danh sách ngắn",
      "Năng lực tài chính",
      "Có bảo đảm dự thầu hợp lệ"
    ],
    "correct": "C"
  },
  {
    "question": "Tiêu chuẩn đánh giá về kỹ thuật được yêu cầu về nhãn hiệu theo nhóm nhãn hiệu cho nguyên nhiên vật liệu, vật tư và các yếu tố đầu vào đối với trường hợp nào?",
    "options": [
      "Nội dung công việc xây lắp thuộc gói thầu xây lắp, gói thầu EC",
      "Nội dung công việc xây lắp thuộc gói thầu EPC",
      "Nội dung công việc xây lắp thuộc gói thầu EPC và gói thầu PC",
      "Nội dung công việc xây lắp thuộc gói thầu xây lắp và gói thầu PC"
    ],
    "correct": "A"
  },
  {
    "question": "Nội dung nào không phải là tiêu chuẩn đánh giá về kỹ thuật của gói thầu tư vấn?",
    "options": [
      "Giải pháp phương pháp luận",
      "Uy tín của nhà thầu thông qua việc tham dự thầu, kết quả thực hiện hợp đồng của nhà thầu",
      "Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
      "Kinh nghiệm và năng lực nhà thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Một trong các căn cứ lập hồ sơ mời thầu là?",
    "options": [
      "Báo giá của nhà thầu",
      "Quyết định mua sắm được phê duyệt",
      "Kế hoạch lựa chọn nhà thầu được duyệt",
      "Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu cung cấp dịch vụ tư vấn, phương pháp đánh giá nào không được áp dụng?",
    "options": [
      "Giá thấp nhất",
      "Giá đánh giá",
      "Kết hợp giữa kỹ thuật và giá",
      "Giá cố định"
    ],
    "correct": "B"
  },
  {
    "question": "Nội dung nào sau đây không thuộc hồ sơ mời thầu?",
    "options": [
      "Chỉ dẫn nhà thầu, tùy chọn mua thêm",
      "Bảng dữ liệu đấu thầu",
      "Phạm vi cung cấp, yêu cầu về kỹ thuật",
      "Biên bản hoàn thiện hợp đồng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào hồ sơ mời thầu được đưa ra yêu cầu về giấy phép bán hàng?",
    "options": [
      "Hàng hóa thông thường, có sẵn trên thị trường",
      "Hàng hóa nhập khẩu",
      "Hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
      "Hàng hóa có giá trị lớn"
    ],
    "correct": "C"
  },
  {
    "question": "Nội dung nào sau đây nếu đưa vào E-HSMT gói thầu mua sắm hàng hóa có thể bị đánh giá là hạn chế cạnh tranh?",
    "options": [
      "Yêu cầu nhà thầu cung cấp tài liệu chứng minh hợp đồng tương tự",
      "Yêu cầu nhà thầu phải là chủ sở hữu thiết bị chào thầu",
      "Yêu cầu nhà thầu có năng lực tài chính lành mạnh",
      "Yêu cầu nhà thầu phải hoàn thành nghĩa vụ thuế"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu mua sắm máy điều hòa không khí của Sở Tài chính tỉnh X được tổ chức đấu thầu tập trung theo hình thức đấu thầu rộng rãi qua mạng thì E- HSMT có được nêu xuất xứ hàng hóa không?",
    "options": [
      "Được nêu xuất xứ cụ thể của một nước bất kỳ",
      "Được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
      "Được nêu xuất xứ cụ thể của một nước bất kỳ nhưng phải kèm theo cụm từ \"hoặc tương đương\"",
      "Không được nêu xuất xứ theo nhóm nước, vùng lãnh thổ"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu mua sắm hàng hóa có khối lượng, số lượng công việc căn cứ nhu cầu theo các năm và thời gian thực hiện gói thầu là 02 năm thì E-HSMT quy định về giá trị của hợp đồng tương tự như thế nào?",
    "options": [
      "Có giá trị bằng 50% giá gói thầu",
      "Có giá trị bằng 70% giá gói thầu",
      "Có giá trị bằng 50% giá trị theo chu kỳ 01 năm của gói thầu",
      "Có giá trị tối thiểu bằng 50% giá gói thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Trong quá trình đánh giá hồ sơ dự thầu gói thầu áp dụng đấu thầu rộng rãi, chủ đầu tư phát hiện người đại diện theo pháp luật của 02 nhà thầu tham dự thầu là anh em ruột thì xem xét, đánh giá như thế nào?",
    "options": [
      "Thuộc hành vi bị cấm trong đấu thầu",
      "Không đáp ứng yêu cầu về bảo đảm cạnh tranh trong đấu thầu",
      "Hồ sơ dự thầu của một trong hai nhà thầu không được xem xét",
      "Không thuộc hành vi bị cấm, không vi phạm quy định về bảo đảm cạnh tranh trong đấu thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Việc đánh giá nhà thầu đang trong thời gian bị cấm tham dự thầu thuộc nội dung đánh giá về?",
    "options": [
      "Kỹ thuật",
      "Tài chính",
      "Tư cách hợp lệ",
      "Năng lực, kinh nghiệm"
    ],
    "correct": "C"
  },
  {
    "question": "Khi đánh giá về năng lực, kinh nghiệm đối với gói thầu mua sắm hàng hóa, nhà thầu được đánh giá là đạt khi nào?",
    "options": [
      "Nhà thầu được đánh giá đạt tất cả tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "Nhà thầu đáp ứng một trong các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "Nhà thầu đáp ứng hai phần ba các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      "Nhà thầu đáp ứng các tiêu chuẩn đánh giá về năng lực và kinh nghiệm quan trọng trong hồ sơ mời thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Việc đánh giá về nhân sự chủ chốt và thiết bị chủ yếu đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi được thực hiện như thế nào?",
    "options": [
      "Đánh giá tất cả các nhà thầu tham dự thầu",
      "Đánh giá đối với nhà thầu xếp thứ nhất",
      "Đánh giá đối với tất cả các nhà thầu được đánh giá đạt về kỹ thuật",
      "Không đánh giá về nhân sự chủ chốt và thiết bị chủ yếu"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa áp dụng hình thức chào hàng cạnh tranh, trường hợp hồ sơ mời thầu không yêu cầu về năng lực, kinh nghiệm thì việc đánh giá được thực hiện như thế nào?",
    "options": [
      "Không phải đánh giá về năng lực, kinh nghiệm nhưng nhà thầu phải cam kết đáp ứng năng lực, kinh nghiệm trong đơn dự thầu",
      "Trường hợp nhà thầu đính kèm tài liệu về năng lực, kinh nghiệm thì chủ đầu tư bắt buộc phải đánh giá về năng lực, kinh nghiệm của nhà thầu",
      "Bắt buộc phải đánh giá năng lực, kinh nghiệm của nhà thầu",
      "Phương án A và B đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi, hồ sơ mời thầu có bắt buộc quy định việc đánh giá đối với yêu cầu về nguồn lực tài chính phải bằng cam kết tín dụng không?",
    "options": [
      "Bắt buộc quy định trong hồ sơ mời thầu do đây là tiêu chí chứng minh nguồn lực tài chính",
      "Không bắt buộc quy định, hồ sơ mời thầu có thể đưa ra yêu cầu về cam kết cung cấp tín dụng hoặc không yêu cầu về cam kết cung cấp tín dụng",
      "Bắt buộc quy định trong hồ sơ mời thầu đối với gói thầu xây lắp áp dụng phương thức một giai đoạn hai túi hồ sơ",
      "Bắt buộc quy định trong hồ sơ mời thầu đối với gói thầu có giá trên 20 tỷ đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu chia thành 2 phần (phần 1: mua sắm máy tính; phần 2: mua sắm bàn ghế cho cán bộ công chức), áp dụng phương pháp giá thấp nhất. Máy tính và bàn ghế là hàng hóa thuộc danh mục do Chính phủ, Thủ tướng Chính phủ quy định tiêu chuẩn, định mức, việc xét duyệt trúng thầu trong trường hợp này được thực hiện như thế nào?",
    "options": [
      "Giá đề nghị trúng thầu của từng hàng hóa đảm bảo không vượt mức giá của từng hàng hóa đó theo tiêu chuẩn, định mức do cấp có thẩm quyền ban hành và tổng giá đề nghị trúng thầu của gói thầu là thấp nhất, không vượt giá gói thầu được duyệt",
      "Tổng giá đề nghị trúng thầu của gói thầu là thấp nhất và không vượt giá gói thầu được duyệt mà không so sánh với ước tính chi phí của từng phần, không cần so sánh với tiêu chuẩn, định mức từng mặt hàng",
      "Giá từng phần thấp nhất, tổng giá đề nghị trúng thầu không vượt giá gói thầu được duyệt, không cần so sánh với tiêu chuẩn, định mức từng mặt hàng",
      "Tất cả phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu xây lắp áp dụng đấu thầu rộng rãi qua mạng, trường hợp E- HSMT quy định nhà thầu phải cung cấp đầy đủ các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật để chứng minh khả năng huy động thiết bị thi công chủ yếu thì nhà thầu phải cung cấp những tài liệu nào?",
    "options": [
      "Phải cung cấp đầy đủ theo yêu cầu của E-HSMT gồm: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      "Chỉ cần cung cấp một trong các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      "Phải bắt buộc cung cấp giấy đăng ký thiết bị kèm theo giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      "Phải bắt buộc cung cấp hợp đồng, hóa đơn mua hàng"
    ],
    "correct": "A"
  },
  {
    "question": "Danh sách xếp hạng nhà thầu có phải thẩm định trước khi phê duyệt hay không?",
    "options": [
      "Bắt buộc",
      "Không bắt buộc",
      "Do chủ đầu tư quyết định",
      "Do người có thẩm quyền quyết định"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp tại thời điểm đóng thầu đối với gói thầu áp dụng hình thức đấu thầu rộng rãi (không áp dụng sơ tuyển, mời quan tâm, không cấp bách cần thực hiện ngay do yêu cầu về tiến độ) mà chỉ có 01 nhà thầu nộp hồ sơ dự thầu thì xử lý như thế nào?",
    "options": [
      "Mở thầu ngay để tiến hành đánh giá",
      "Gia hạn thời điểm đóng thầu tối thiểu 10 ngày",
      "Báo cáo người có thẩm quyền xem xét, quyết định",
      "Phương án A và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu xây lắp, trường hợp công ty mẹ tham dự thầu và huy động công ty con tham gia thực hiện gói thầu thì việc đánh giá kinh nghiệm thực hiện hợp đồng tương tự được thực hiện như thế nào?",
    "options": [
      "Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ, không đánh giá kinh nghiệm của công ty con",
      "Đánh giá kinh nghiệm thực hiện hợp đồng tương tự căn cứ vào giá trị, khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu",
      "Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty con, không đánh giá kinh nghiệm của công ty mẹ, không phân biệt khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu",
      "Đánh giá theo tổng kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ và công ty con, không phân biệt khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Kinh nghiệm thực hiện hợp đồng xây lắp tương tự gói thầu chỉ bao gồm 01 công trình độc lập được xét trên cơ sở nào sau đây?",
    "options": [
      "Xét theo công trình nhà thầu đã hoàn thành toàn bộ hoặc hoàn thành phần lớn có loại kết cấu, cấp công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      "Chỉ xét theo công trình nhà thầu đã hoàn thành toàn bộ, đã được nghiệm thu, cùng loại công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      "Xét theo các hạng mục công việc có tính chất tương tự nhà thầu đã hoàn thành phần lớn",
      "Tất cả phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa tổ chức đấu thầu rộng rãi qua mạng, kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự được xét trên cơ sở nào sau đây?",
    "options": [
      "Hàng hóa có cùng chủng loại với gói thầu đang xét",
      "Hàng hóa thuộc cùng lĩnh vực tổng quát với hàng hóa của gói thầu",
      "Hàng hóa có 4 số đầu tiên mã HS cùng với mã HS của hàng hóa thuộc gói thầu",
      "Cả 2 phương án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu dịch vụ phi tư vấn chia thành nhiều phần thì việc đánh giá về doanh thu đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
    "options": [
      "Việc đánh giá về doanh thu căn cứ trên tổng giá trị doanh thu bình quân yêu cầu đối với các phần mà nhà thầu tham dự",
      "Việc đánh giá về doanh thu căn cứ trên tổng giá trị doanh thu bình quân yêu cầu đối với gói thầu có giá lớn nhất trong số các phần mà nhà thầu tham dự",
      "Việc đánh giá về doanh thu căn cứ trên doanh thu bình quân yêu cầu đối với từng phần mà nhà thầu tham dự",
      "Việc đánh giá về doanh thu căn cứ trên tổng giá gói thầu và yêu cầu về doanh thu"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nhà thầu phải nộp bản gốc bảo đảm dự thầu cho chủ đầu tư khi nào?",
    "options": [
      "Gửi cho Tổ trưởng Tổ chuyên gia",
      "Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
      "Gửi bản gốc đến địa chỉ bên mời thầu theo quy định trong E-HSMT",
      "Gửi cho Đơn vị tư vấn đấu thầu đánh giá E-HSDT"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu qua mạng, quy định nào về việc mở thầu và công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    "options": [
      "Hệ thống tự động mở thầu và công khai biên bản mở thầu trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 04 giờ kể từ thời điểm đóng thầu.",
      "Tổ chuyên gia phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      "Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu."
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trong quá trình đánh giá E-HSDT, Chủ đầu tư nhận thấy nhà thầu có tên trong biên bản mở thầu đang bị khóa tài khoản theo quy định của pháp luật về đấu thầu, E-HSDT của nhà thầu bị đánh giá như thế nào?",
    "options": [
      "E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá mà không cần phải mở khóa tài khoản trước khi ký hợp đồng",
      "E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá nhưng chỉ được đề nghị trúng thầu khi thực hiện mở khóa tài khoản trước khi ký hợp đồng",
      "E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
      "Nhà thầu bị cấm tham gia hoạt động đấu thầu do có hành vi gian lận"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, sau thời điểm đóng thầu, nhận định nào sau đây là đúng?",
    "options": [
      "Nhà thầu có thể thay đổi nội dung E-HSDT nếu phát hiện sai sót",
      "Nhà thầu có thể tự làm rõ E-HSDT trên Hệ thống",
      "Nhà thầu không rút được E-HSDT trên Hệ thống",
      "Chủ đầu tư không được phép mở thầu khi chỉ có 01 nhà thầu tham dự"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp Hệ thống gặp sự cố thì trường hợp nào được Hệ thống tự động gia hạn thời điểm đóng thầu?",
    "options": [
      "Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến, thời điểm đăng tải kết quả lựa chọn nhà thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      "Các gói thầu có thời điểm đóng thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 04 giờ",
      "Các đáp án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, khi tham dự thầu, nhà thầu….?",
    "options": [
      "Chịu trách nhiệm về tính chính xác của các thông tin kê khai trên webform và file tài liệu đính kèm",
      "Chỉ nộp một bộ E-HSDT đối với một E-TBMT",
      "Chỉ được rút, sửa đổi, nộp lại E-HSDT trước thời điểm đóng thầu",
      "Cả 3 đáp án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Khi nào nhà thầu phải nộp lại E-HSDT đã nộp?",
    "options": [
      "Khi Tổ chuyên gia phát hiện E-HSDT bị lỗi kỹ thuật không mở được",
      "Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố phải tự động gia hạn",
      "Khi E-HSMT được sửa đổi",
      "Các phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu tổ chức đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu mà không có nhà thầu nộp E-HSDT thì chủ đầu tư quyết định theo phương án nào sau đây?",
    "options": [
      "Huỷ E-TBMT",
      "Chuyển sang hình thức đấu thầu rộng rãi không qua mạng",
      "Cho phép gia hạn thời điểm đóng thầu tối thiểu 05 ngày đối với gói thầu xây lắp, hỗn hợp có giá gói thầu không quá 20 tỷ đồng, gói thầu mua sắm hàng hoá, dịch vụ phi tư vấn có giá không quá 10 tỷ đồng",
      "Phương án A và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì xử lý như nào?",
    "options": [
      "Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      "Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      "Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để",
      "Phương án B và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Hạn mức áp dụng chỉ định thầu đối với gói thầu thuộc dự toán mua sắm thường xuyên là:",
    "options": [
      "Gói thầu xây lắp thuộc dự toán mua sắm có giá gói thầu không quá 500 triệu đồng; gói thầu mua sắm hàng hóa, dịch vụ thuộc dự án có giá gói thầu không quá 01 tỷ đồng",
      "Gói thầu xây lắp thuộc dự toán mua sắm có giá gói thầu không quá 01 tỷ đồng; gói thầu xây lắp thuộc dự án có giá gói thầu không quá 02 tỷ đồng",
      "Gói thầu mua sắm hàng hóa, cung cấp dịch vụ phi tư vấn thuộc dự án có giá gói thầu không quá 05 tỷ đồng;",
      "Phương án B và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu áp dụng hình thức chào giá trực tuyến rút gọn, việc thẩm định kết quả lựa chọn nhà thầu được thực hiện như thế nào?",
    "options": [
      "Chỉ thẩm định nội dung về giá chào",
      "Bắt buộc thẩm định khi người có thẩm quyền yêu cầu",
      "Không phải thẩm định kết quả lựa chọn nhà thầu",
      "Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì phương án nào sau đây là đúng?",
    "options": [
      "Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      "Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      "Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      "Phương án B và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Nhận định nào sau đây về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    "options": [
      "Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      "Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      "Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu...",
      "Tất cả các đáp án trên đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Việc phải ký kết hợp đồng điện tử trên Hệ thống mạng đấu thầu quốc gia được áp dụng đối với gói thầu nào sau đây?",
    "options": [
      "Gói thầu áp dụng đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh, chào giá trực tuyến, mua sắm trực tuyến mà việc thanh toán hợp đồng được thực hiện qua Kho bạc nhà nước",
      "Gói thầu áp dụng đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh, chào giá trực tuyến, mua sắm trực tuyến mà việc thanh toán hợp đồng không thực hiện qua Kho bạc nhà nước",
      "Tất cả các gói thầu áp dụng đấu thầu qua mạng",
      "Tất cả các gói thầu áp dụng đấu thầu qua mạng và không qua mạng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, sau khi đánh giá E-HSDT, tổ trưởng tổ chuyên gia phải thực hiện nội dung gì sau đây trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      "Đính kèm bản scan báo cáo đánh giá E-HSDT (có chữ ký của tất cả thành viên trong tổ chuyên gia)",
      "Đính kèm bản scan báo cáo đánh giá E-HSDT (không cần có chữ ký của tất cả thành viên trong tổ chuyên gia)",
      "Đính kèm bản chụp báo cáo đánh giá E-HSDT (có chữ ký của tất cả thành viên trong tổ chuyên gia)",
      "Đính kèm bản chụp báo cáo đánh giá E-HSDT (không cần có chữ ký của tất cả thành viên trong tổ chuyên gia)"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu rộng rãi qua mạng, trường hợp gói thầu có giá trị bảo đảm dự thầu nhỏ hơn 50 triệu đồng, thời gian có hiệu lực của thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh được quy định tại đâu?",
    "options": [
      "Trong E-HSMT",
      "Trong thông báo mời đối chiếu tài liệu",
      "Trong thông báo mời thương thảo hợp đồng",
      "Các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu rộng rãi qua mạng, trường hợp gói thầu có giá trị bảo đảm dự thầu nhỏ hơn 50 triệu đồng, nhà thầu thực hiện nộp thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh thì thời gian có hiệu lực của thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh được tính từ ngày nào?",
    "options": [
      "Ngày có thời điểm đóng thầu",
      "Ngày phê duyệt kết quả lựa chọn nhà thầu",
      "Ngày thực hiện đối chiếu tài liệu",
      "Các phương án trên đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp cần sửa đổi E-HSDT đã nộp trước thời điểm đóng thầu, nhà thầu phải thực hiện theo phương án nào sau đây khi E-HSMT của gói thầu này không phải sửa đổi?",
    "options": [
      "Phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó để sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      "Không phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó, chỉ cần sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      "Sửa đổi cho phù hợp E-HSDT đã nộp mà không phải nộp lại E-HSDT mới",
      "Nhà thầu không được sửa đổi E-HSDT đã nộp"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nhà thầu đã nộp E-HSDT nhưng sau đó E-HSMT của gói thầu này sửa đổi thì nhà thầu cần thực hiện theo phương án nào sau đây?",
    "options": [
      "Phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó để sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      "Không phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó, chỉ cần sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      "Sửa đổi cho phù hợp E-HSDT đã nộp mà không phải nộp lại E-HSDT mới",
      "Nhà thầu không được sửa đổi E-HSDT đã nộp"
    ],
    "correct": "A"
  },
  {
    "question": "Quy trình lựa chọn nhà thầu theo hình thức chỉ định thầu theo quy trình thông thường bao gồm các bước nào sau đây?",
    "options": [
      "Lập, phê duyệt hồ sơ yêu cầu; gửi hồ sơ yêu cầu; nộp hồ sơ đề xuất; đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu",
      "Chuẩn bị và gửi dự thảo hợp đồng cho tối thiểu 03 nhà thầu có đủ năng lực, kinh nghiệm để đàm phán hợp đồng",
      "Đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu",
      "Phương án A và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Trường hợp đơn vị được giao nhiệm vụ mua sắm tập trung không đủ năng lực, kinh nghiệm tổ chức lựa chọn nhà thầu thì thực hiện như thế nào?",
    "options": [
      "Báo cáo người có thẩm quyền để giao đơn vị khác thực hiện việc lựa chọn nhà thầu",
      "Phải thực hiện theo nhiệm vụ được giao, không được đi thuê đơn vị tư vấn để thực hiện việc lựa chọn nhà thầu",
      "Được phép thuê đơn vị tư vấn đấu thầu có kinh nghiệm để thực hiện việc lựa chọn nhà thầu",
      "Phương án A và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với chỉ định thầu theo quy trình rút gọn bao gồm các bước nào sau đây?",
    "options": [
      "Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; thương thảo, hoàn thiện hợp đồng; trình, phê duyệt và công khai kết quả lựa chọn nhà thầu; ký kết hợp đồng",
      "Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; thương thảo hợp đồng; trình, phê duyệt kết quả lựa chọn nhà thầu; ký kết và quản lý thực hiện hợp đồng",
      "Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; hoàn thiện hợp đồng, phê duyệt và công khai kết quả lựa chọn nhà thầu; ký kết và quản lý thực hiện hợp đồng",
      "Lập, phê duyệt hồ sơ yêu cầu; xác định nhà thầu dự kiến được mời nhận hồ sơ yêu cầu; đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu; phê duyệt và công khai kết quả lựa chọn nhà thầu; hoàn thiện, ký kết và quản lý thực hiện hợp đồng"
    ],
    "correct": "C"
  },
  {
    "question": "Phương án nào xác định quy mô của hợp đồng tương tự đối với gói thầu áp dụng mua sắm tập trung là phù hợp?",
    "options": [
      "Trong mọi trường hợp có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,5 (Y thông thường khoảng 50% giá trị của gói thầu đang xét)",
      "Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn thì có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,25 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu",
      "Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn thì có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,5 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu",
      "Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn, chủ đầu tư báo cáo người có thẩm quyền để điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,25 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu cung cấp dịch vụ tư vấn không qua mạng, trường hợp hồ sơ đề xuất về tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật sẽ được xử lý như thế nào theo quy định của pháp luật về đấu thầu?",
    "options": [
      "Trả lại nguyên trạng cho nhà thầu trong thời hạn 10 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn",
      "Trả lại nguyên trạng cho nhà thầu trong thời hạn 05 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn",
      "Trả lại nguyên trạng cho nhà thầu trong thời hạn 15 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn",
      "Hồ sơ được lưu trữ theo quy định của Pháp luật về lưu trữ"
    ],
    "correct": "A"
  },
  {
    "question": "Việc giữ lại hồ sơ tài chính của nhà thầu không đạt kỹ thuật sau thời hạn quy định sẽ…?",
    "options": [
      "Là cơ sở để tiếp tục đánh giá trong trường hợp phải đánh giá lại",
      "Bảo đảm trách nhiệm của chủ đầu tư theo quy định của pháp luật về đấu thầu",
      "Có thể dẫn tới khiếu nại từ nhà thầu",
      "Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Thông tư số 80/2025/TT-BTC quy định chi tiết mẫu hồ sơ yêu cầu, báo cáo đánh giá, báo cáo thẩm định, kiểm tra, báo cáo tình hình thực hiện hoạt động đấu thầu có hiệu lực từ thời điểm nào?",
    "options": [
      "Ngày 08/8/2025",
      "Ngày 04/8/2025",
      "Ngày 01/8/2025",
      "Ngày 01/7/2025"
    ],
    "correct": "A"
  }
];