const questions = [
  {
    "question": "Trường hợp nào sau đây bắt buộc phải lựa chọn nhà thầu theo quy định tại Luật Đấu thầu?",
    "options": [
      " Gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của cơ quan nhà nước",
      " Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước",
      " Lựa chọn nhà thầu của đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước",
      " Việc thuê, mua, thuê mua nhà, trụ sở, tài sản gắn liền với đất"
    ],
    "correct": "A"
  },
  {
    "question": "Chọn phương án đúng về phạm vi điều chỉnh của Luật Đấu thầu?",
    "options": [
      " Quy định về quản lý nhà nước đối với hoạt động đấu thầu",
      " Quy định về thẩm quyền và trách nhiệm của các cơ quan, tổ chức, cá nhân trong hoạt động đấu thầu",
      " Quy định về hoạt động lựa chọn nhà thầu thực hiện gói thầu, hoạt động lựa chọn nhà đầu tư thực hiện dự án đầu tư kinh doanh",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào sau đây không thuộc đối tượng áp dụng của Luật Đấu thầu?",
    "options": [
      " Gói thầu mua thuốc, hoá chất, vật tư xét nghiệm sử dụng nguồn ngân sách nhà nước của bệnh viện công lập A",
      " Gói thầu xây dựng đường giao thông sử dụng vốn đầu tư công do Ban Quản lý dự án đầu tư xây dựng công trình tỉnh A làm chủ đầu tư",
      " Gói thầu mua sắm trang thiết bị làm việc sử dụng vốn nhà nước của Văn phòng UBND tỉnh A",
      " Hoạt động mua phần mềm kế toán của hộ kinh doanh cá thể"
    ],
    "correct": "D"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, gói thầu nào là gói thầu cung cấp dịch vụ tư vấn?",
    "options": [
      " Thiết kế và cung cấp hệ thống xử lý nước thải",
      " Gói thầu lập nhiệm vụ quy hoạch vùng",
      " Gói thầu quảng cáo trên nền tảng xã hội và phát sóng trên VTV",
      " Gói thầu mua phần mềm kế toán MISA"
    ],
    "correct": "B"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, gói thầu nào là gói thầu cung cấp dịch vụ phi tư vấn?",
    "options": [
      " Gói thầu in sổ công tác của tỉnh A",
      " Gói thầu thuê kiểm toán dự án",
      " Gói thầu mua phần mềm kế toán hỗ trợ doanh nghiệp khởi nghiệp sáng tạo, doanh nghiệp nhỏ do phụ nữ làm chủ",
      " Gói thầu xây dựng trụ sở làm việc của tỉnh A."
    ],
    "correct": "A"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, đấu thầu là gì?",
    "options": [
      " Là quá trình lựa chọn nhà thầu để ký kết, thực hiện hợp đồng cung cấp dịch vụ tư vấn, dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
      " Là quá trình lựa chọn nhà đầu tư để ký kết, thực hiện hợp đồng dự án đầu tư kinh doanh trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
      " Là quá trình lựa chọn đơn vị để thực hiện hợp đồng thông qua các quy trình, thủ tục do pháp luật đấu thầu quy định.",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đấu thầu quốc tế là gì?",
    "options": [
      " Là hoạt động đấu thầu mà nhà thầu trong nước, nhà thầu nước ngoài được tham dự thầu",
      " Là hoạt động đấu thầu mà nhà thầu trong nước, nhà thầu nước ngoài được tham dự thầu, trong đó nhà thầu trong nước bắt buộc phải liên danh với nhà thầu nước ngoài",
      " Là hoạt động đấu thầu chỉ nhà thầu quốc tế được phép tham dự thầu",
      " Là hoạt động đấu thầu chỉ nhà thầu trong nước được phép tham dự thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Giá đề nghị trúng thầu là gì?",
    "options": [
      " Là giá dự thầu của nhà thầu ghi trong quyết định phê duyệt kết quả lựa chọn nhà thầu.",
      " Là giá dự thầu của nhà thầu được đề nghị trúng thầu sau khi đã được sửa lỗi, hiệu chỉnh sai lệch theo yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu, trừ đi giá trị giảm giá (nếu có)",
      " Là giá dự thầu của nhà thầu chưa tính sửa lỗi, hiệu chỉnh sai lệch và giá trị giảm giá (nếu có)",
      " Là giá trị ghi trong hợp đồng giữa chủ đầu tư và nhà thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, hàng hóa gồm?",
    "options": [
      " Máy móc, thiết bị, nguyên liệu, nhiên liệu, vật liệu, vật tư, phụ tùng; sản phẩm; phương tiện; hàng tiêu dùng, phần mềm thương mại",
      " Thuốc, hóa chất, vật tư xét nghiệm, thiết bị y tế",
      " Phương án A và B đều đúng",
      " Logistics, bảo hiểm, quảng cáo, nghiệm thu chạy thử, chụp ảnh vệ tinh"
    ],
    "correct": "C"
  },
  {
    "question": "Đối tượng nào sau đây được hưởng ưu đãi trong lựa chọn nhà thầu?",
    "options": [
      " Hàng hóa có xuất xứ Việt Nam",
      " Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      " Sản phẩm, dịch vụ thân thiện môi trường theo quy định của pháp luật về bảo vệ môi trường",
      " Tất cả các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Nhà thầu trong nước nào được hưởng ưu đãi trong lựa chọn nhà thầu?",
    "options": [
      " Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
      " Nhà thầu trong nước tham dự thầu với tư cách độc lập hoặc liên danh với nhà thầu trong nước khác khi tham dự đấu thầu quốc tế",
      " Nhà thầu trong nước có sử dụng lao động nữ, thương binh, người khuyết tật hoặc người dân tộc thiểu số",
      " Tất cả các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào sau đây cơ quan, tổ chức, doanh nghiệp được tự quyết định việc lựa chọn nhà thầu trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình?",
    "options": [
      " Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của cơ quan nhà nước",
      " Thực hiện gói thầu thuộc dự án sử dụng vốn đầu tư công của đơn vị sự nghiệp công lập bảo đảm một phần chi thường xuyên",
      " Thực hiện gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của doanh nghiệp nhà nước",
      " Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước, đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên và chi đầu tư, đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước"
    ],
    "correct": "D"
  },
  {
    "question": "Ngôn ngữ sử dụng đối với đấu thầu quốc tế là gì?",
    "options": [
      " Tiếng Việt",
      " Tiếng Đức",
      " Tiếng Anh hoặc tiếng Việt và tiếng Anh",
      " Tiếng Đức hoặc tiếng Anh"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu quốc tế, trường hợp ngôn ngữ sử dụng trong hồ sơ mời thầu là tiếng Việt và tiếng Anh thì khi tham dự thầu, nhà thầu được sử dụng ngôn ngữ gì?",
    "options": [
      " Chỉ tiếng Việt",
      " Chỉ tiếng Anh",
      " Tiếng Việt hoặc tiếng Anh",
      " Bắt buộc cả tiếng Việt và tiếng Anh"
    ],
    "correct": "C"
  },
  {
    "question": "Điều kiện để tổ chức đấu thầu quốc tế lựa chọn nhà thầu thực hiện gói thầu mua sắm hàng hóa là gì?",
    "options": [
      " Gói thầu mua sắm hàng hóa thông dụng, đơn giản, có sẵn trên thị trường",
      " Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước sản xuất được và đáp ứng các yêu cầu về kỹ thuật, chất lượng, giá nhưng chủ đầu tư yêu cầu phải mua hàng hóa nhập khẩu",
      " Gói thầu mua sắm hàng hóa mà hàng hóa đó trong nước không sản xuất được hoặc sản xuất được nhưng không đáp ứng một trong các yêu cầu về kỹ thuật, chất lượng, giá",
      " Gói thầu mua sắm hàng hóa thông dụng đã được nhập khẩu và chào bán tại Việt Nam nhưng hàng hóa đó trong nước không sản xuất được"
    ],
    "correct": "C"
  },
  {
    "question": "Trong trường hợp hủy thầu, toàn bộ hồ sơ liên quan đến quá trình lựa chọn nhà thầu của gói thầu đó có cần phải lưu trữ không?",
    "options": [
      " Không cần lưu trữ, hủy hồ sơ ngay sau khi quyết định hủy thầu được ban hành nhưng phải đảm bảo thông tin không bị tiết lộ",
      " Không cần lưu trữ, trả lại hồ sơ cho nhà thầu theo nguyên trạng ngay sau khi quyết định hủy thầu được ban hành",
      " Có cần lưu trữ, trong thời hạn 05 năm kể từ ngày quyết định hủy thầu được ban hành",
      " Có cần lưu trữ, trong thời hạn 03 năm kể từ ngày quyết định hủy thầu được ban hành"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu rộng rãi quốc tế, trường hợp hồ sơ đề xuất về tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật, nhà thầu từ chối nhận lại hồ sơ đề xuất của mình thì Chủ đầu tư phải xử lý như thế nào?",
    "options": [
      " Chủ đầu tư xem xét, quyết định việc hủy hồ sơ nhưng phải đảm bảo thông tin không bị tiết lộ",
      " Chủ đầu tư phải lưu trữ theo quy định của pháp luật về lưu trữ",
      " Chủ đầu tư lưu trữ tối thiểu 05 năm",
      " Tất cả các phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Hồ sơ hoàn công và quyết toán của gói thầu được lưu trữ theo quy định nào?",
    "options": [
      " Quy định nội bộ của nhà thầu",
      " Quy định của tư vấn giám sát",
      " Quy định của pháp luật về lưu trữ",
      " Tất cả phương án trên đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu xây lắp đấu thầu không qua mạng, hồ sơ đề xuất tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật sẽ được trả lại khi nào?",
    "options": [
      " Khi gửi thư mời thương thảo",
      " Khi kết thúc giai đoạn đánh giá kỹ thuật",
      " Khi hoàn trả bảo đảm dự thầu của nhà thầu không được lựa chọn hoặc đăng tải kết quả lựa chọn nhà thầu",
      " Khi ký hợp đồng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu quốc tế, hồ sơ mời thầu được phát hành như thế nào?",
    "options": [
      " Hồ sơ mời thầu được phát hành trên Hệ thống mạng đấu thầu quốc gia; Nhà thầu nộp tiền mua bản điện tử hồ sơ mời thầu khi nộp hồ sơ dự thầu",
      " Hồ sơ mời thầu được bán vào giờ hành chính từ thứ 2 tới thứ 6 tại địa chỉ do Chủ đầu tư quy định",
      " Phương án A và B đều đúng",
      " Phương án A và B đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu sử dụng vốn ngân sách nhà nước, tiền bán bản điện tử hồ sơ mời thầu, hồ sơ yêu cầu sẽ được xử lý như thế nào?",
    "options": [
      " Sử dụng theo quy chế tài chính của chủ đầu tư",
      " Nộp vào ngân sách nhà nước theo quy định của Luật Ngân sách nhà nước",
      " Sử dụng theo cơ chế khoán chi",
      " Tất cả các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Chi phí đăng tải quyết định phê duyệt kế hoạch lựa chọn nhà thầu và quyết định phê duyệt kết quả lựa chọn nhà thầu trên Hệ thống mạng đấu thầu quốc gia đối với gói thầu chỉ định thầu là bao nhiêu?",
    "options": [
      " 220.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      " 330.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)",
      " Miễn phí",
      " 110.000 đồng/1 gói thầu (đã bao gồm thuế giá trị gia tăng)"
    ],
    "correct": "C"
  },
  {
    "question": "Thành viên tổ chuyên gia thuộc tổ chức tư vấn đấu thầu cần có tối thiểu bao nhiêu năm kinh nghiệm trong lĩnh vực liên quan?",
    "options": [
      " 01 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      " 02 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      " 03 năm công tác thuộc một trong các lĩnh vực liên quan đến nội dung pháp lý, kỹ thuật, tài chính của gói thầu",
      " Không có quy định về số năm kinh nghiệm"
    ],
    "correct": "C"
  },
  {
    "question": "Đơn vị sự nghiệp công lập A đã trúng thầu gói thầu tổ chức lớp đào tạo cán bộ cho UBND tỉnh X sử dụng vốn ngân sách địa phương. Đơn vị sự nghiệp công lập A có phải tổ chức lựa chọn nhà thầu theo Luật Đấu thầu để thuê dịch vụ hậu cần (như địa điểm ăn nghỉ, photo tài liệu, hội trường tổ chức) hay không?",
    "options": [
      " Phải lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      " Căn cứ vào hợp đồng quy định giữa đơn vị A và UBND tỉnh X",
      " Đơn vị A được tự quyết định việc mua sắm trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình",
      " Căn cứ theo phân cấp quyết định mua sắm của UBND tỉnh X"
    ],
    "correct": "C"
  },
  {
    "question": "Sở Y tế tỉnh A được doanh nghiệp trong nước tài trợ 5 tỷ đồng để mua sắm thuốc phục vụ khám chữa bệnh cho người nghèo, hỏi Sở Y tế có phải tổ chức đấu thầu thuốc theo quy định của Luật Đấu thầu không?",
    "options": [
      " Sở Y tế A được tự quyết định việc mua sắm trên cơ sở bảo đảm công khai, minh bạch, hiệu quả và trách nhiệm giải trình trong trường hợp nhà tài trợ yêu cầu không lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      " Sở Y tế A phải tổ chức lựa chọn nhà thầu theo quy định của Luật Đấu thầu",
      " Trong mọi trường hợp Sở Y tế A không phải thực hiện theo Luật Đấu thầu do đây là nguồn doanh nghiệp trong nước tài trợ",
      " Phải xin ý kiến của UBND tỉnh A để có cơ sở xác định có phải tổ chức lựa chọn nhà thầu theo Luật Đấu thầu hay không"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu cung cấp dịch vụ tư vấn không qua mạng, trường hợp hồ sơ đề xuất về tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật sẽ được xử lý như thế nào theo quy định của pháp luật về đấu thầu?",
    "options": [
      " Trả lại nguyên trạng cho nhà thầu trong thời hạn 10 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn",
      " Trả lại nguyên trạng cho nhà thầu trong thời hạn 05 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn",
      " Trả lại nguyên trạng cho nhà thầu trong thời hạn 15 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn",
      " Hồ sơ được lưu trữ theo quy định của Pháp luật về lưu trữ"
    ],
    "correct": "A"
  },
  {
    "question": "Việc giữ lại hồ sơ tài chính của nhà thầu không đạt kỹ thuật sau thời hạn quy định sẽ…?",
    "options": [
      " Là cơ sở để tiếp tục đánh giá trong trường hợp phải đánh giá lại",
      " Bảo đảm trách nhiệm của chủ đầu tư theo quy định của pháp luật về đấu thầu",
      " Có thể dẫn tới khiếu nại từ nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Trường hợp nào sau đây Công ty B khi tham dự gói thầu xây lắp X thuộc Dự án Y được kết luận là đáp ứng về bảo đảm cạnh tranh trong đấu thầu?",
    "options": [
      " Công ty B sử dụng nhà thầu phụ là công ty A, công ty A là nhà thầu tư vấn lập Chương V yêu cầu kỹ thuật cho E-HSMT của gói thầu xây lắp X",
      " Công ty B tham dự gói thầu xây lắp X đồng thời là nhà thầu tư vấn lập Chương V yêu cầu kỹ thuật của E-HSMT của gói thầu xây lắp X.",
      " Công ty B sử dụng nhà thầu phụ là công ty tư vấn C, công ty tư vấn C sở hữu 30% cổ phần của công ty A và công ty A là nhà thầu tư vấn thiết kế kỹ thuật cho dự án Y",
      " Công ty A là nhà thầu tư vấn lập hồ sơ mời thầu gói thầu xây lắp X có sở hữu 30% vốn góp của Công ty B"
    ],
    "correct": "C"
  },
  {
    "question": "Chọn phương án đúng đối với nhà thầu phụ đặc biệt?",
    "options": [
      " Đối với đấu thầu trong nước, khi tham gia gói thầu của dự án thuộc lĩnh vực khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số thì nhà thầu trong nước được sử dụng nhà thầu phụ đặc biệt là nhà thầu nước ngoài đối với phần công việc đặc thù mà nhà thầu trong nước chưa thực hiện được hoặc cần chuyển giao công nghệ",
      " Trong mọi trường hợp, đối với đấu thầu trong nước, nhà thầu không được phép sử dụng nhà thầu phụ đặc biệt là nhà thầu nước ngoài",
      " Giá trị công việc tối đa dành cho nhà thầu phụ trong hợp đồng phải bao gồm khối lượng công việc dành cho nhà thầu phụ đặc biệt",
      " Phương án A và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu không qua mạng, việc phê duyệt và phát hành hồ sơ mời thầu được thực hiện theo phương án nào sau đây?",
    "options": [
      "P hê duyệt và phát hành hồ sơ mời thầu trên Hệ thống mạng đấu thầu quốc gia",
      " Phê duyệt trên Hệ thống mạng đấu thầu quốc gia và phát hành hồ sơ mời thầu bản giấy",
      " Phê duyệt và phát hành hồ sơ mời thầu bản giấy",
      "C ác phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu nào sau đây thuộc trường hợp được áp dụng chào hàng cạnh tranh?",
    "options": [
      " Tất cả gói thầu mua sắm hàng hoá có giá không quá 10 tỷ đồng",
      " Gói thầu dịch vụ phi tư vấn thông dụng, đơn giản có giá không quá 10 tỷ đồng",
      " Gói thầu dịch vụ tư vấn thông dụng, đơn giản có giá không quá 10 tỷ đồng",
      " Gói thầu xây lắp công trình đơn giản đã có dự toán được phê duyệt có giá không quá 15 tỷ đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa thông dụng, sẵn có trên thị trường có giá gói thầu 05 tỷ đồng thì kế hoạch lựa chọn nhà thầu phê duyệt áp dụng hình thức lựa chọn nhà thầu nào sau đây?",
    "options": [
      " Chỉ được áp dụng hình thức chào hàng cạnh tranh",
      " Được áp dụng hình thức chào hàng cạnh tranh hoặc đấu thầu rộng rãi",
      " Bắt buộc áp dụng hình thức chỉ định thầu",
      " Được áp dụng hình thức chỉ định thầu hoặc chào hàng cạnh tranh hoặc đấu thầu rộng rãi"
    ],
    "correct": "B"
  },
  {
    "question": "Hạn mức chỉ định thầu đối với gói thầu không hình thành dự án thuộc dự toán mua sắm thường xuyên là?",
    "options": [
      " 500 triệu đồng",
      " 800 triệu đồng",
      " 01 tỷ đồng",
      " 300 triệu đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Hạn mức chỉ định thầu đối với gói thầu mua sắm hàng hóa thuộc dự án đầu tư là?",
    "options": [
      " 800 triệu đồng",
      " 500 triệu đồng",
      " 01 tỷ đồng",
      " 02 tỷ đồng"
    ],
    "correct": "D"
  },
  {
    "question": "Phương án nào không phải là một trong các hình thức lựa chọn nhà thầu được phê duyệt trong kế hoạch lựa chọn nhà thầu?",
    "options": [
      " Đấu thầu rộng rãi",
      " Đấu thầu hạn chế",
      " Mua sắm trực tiếp",
      " Đấu thầu qua mạng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu lựa chọn tư vấn là tổ chức có giá gói thầu là 500 triệu đồng áp dụng hình thức lựa chọn nhà thầu nào?",
    "options": [
      " Bắt buộc áp dụng hình thức chỉ định thầu",
      " Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi",
      " Được áp dụng hình thức chào hàng cạnh tranh hoặc đấu thầu rộng rãi",
      " Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi hoặc chào hàng cạnh tranh"
    ],
    "correct": "B"
  },
  {
    "question": "Chọn phương án đúng về hạn mức đối với đấu thầu rộng rãi?",
    "options": [
      " Không quy định hạn mức áp dụng",
      " Giá gói thầu trên 20 tỷ đồng",
      " Giá gói thầu trên 10 tỷ đồng",
      " Giá gói thầu trên 20 tỷ đồng đối với xây lắp, hàng hoá; trên 10 tỷ đồng đối với gói thầu dịch vụ tư vấn, phi tư vấn"
    ],
    "correct": "A"
  },
  {
    "question": "Chọn phương án đúng về loại gói thầu đối với hình thức mua sắm trực tiếp?",
    "options": [
      " Chỉ gói thầu mua sắm hàng hoá",
      " Chỉ gói thầu xây lắp",
      " Chỉ gói thầu dịch vụ phi tư vấn",
      " Gói thầu mua sắm hàng hóa và dịch vụ phi tư vấn"
    ],
    "correct": "A"
  },
  {
    "question": "Phương án nào không phải là điều kiện để được áp dụng hình thức mua sắm trực tiếp?",
    "options": [
      " Nhà thầu đã trúng thầu thông qua đấu thầu rộng rãi, đấu thầu hạn chế và đã ký hợp đồng gói thầu thực hiện gói thầu trước đó",
      " Thời gian từ khi ký hợp đồng gói thầu trước đến ngày phê duyệt kết quả mua sắm trực tiếp không quá 12 tháng",
      " Đơn giá các phần việc thuộc gói thầu mua sắm trực tiếp không vượt đơn giá phần việc tương ứng của gói thầu đã ký trước đó thuộc gói thầu tương tự đã ký hợp đồng trước đó, đồng thời, phù hợp với giá thị trường tại thời điểm hoàn thiện hợp đồng",
      " Chủ đầu tư được áp dụng mua sắm trực tiếp nhiều lần đối với các loại hàng hóa thuộc gói thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Hãy chọn phương án đúng về hình thức đặt hàng?",
    "options": [
      " Là một trong các hình thức lựa chọn nhà thầu",
      " Pháp luật quản lý ngành, lĩnh vực quy định về quy trình, thủ tục đặt hàng khác với quy trình, thủ tục của pháp luật về đấu thầu thì áp dụng quy định của pháp luật về đấu thầu.",
      " Đặt hàng chỉ được áp dụng cho sản phẩm, dịch vụ công",
      " Đặt hàng chỉ áp dụng đối với nguồn chi thường xuyên ngân sách nhà nước, không được áp dụng đối với nguồn vốn khác"
    ],
    "correct": "A"
  },
  {
    "question": "Kế hoạch lựa chọn nhà thầu của dự án thuộc đối tượng áp dụng của Luật Đấu thầu bắt buộc phải đăng tải ở đâu?",
    "options": [
      " Hệ thống mạng đấu thầu quốc gia",
      " Báo Tài chính-Đầu tư",
      " Cổng Thông tin điện tử của Bộ, ngành",
      " Phương án A và B đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Chậm nhất là bao nhiêu ngày thì kế hoạch lựa chọn nhà thầu phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " 05 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      " 07 ngày kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      " 07 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
      " 10 ngày kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành"
    ],
    "correct": "A"
  },
  {
    "question": "Kế hoạch lựa chọn nhà thầu bao gồm nội dung nào sau đây?",
    "options": [
      " Giá gói thầu",
      " Thời gian thực hiện hợp đồng",
      " Giám sát hoạt động đấu thầu",
      " Cả 3 phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với nội dung mua sắm hàng hóa có giá không quá 50 triệu đồng thì được thực hiện như thế nào?",
    "options": [
      " Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm trên cơ sở tiết kiệm, hiệu quả, bảo đảm đầy đủ hoá đơn, chứng từ",
      " Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm theo giá công khai, giá niêm yết và không cần hoá đơn, chứng từ",
      " Được hình thành gói thầu để thực hiện lựa chọn nhà thầu theo một trong hình thức lựa chọn nhà thầu (đấu thầu rộng rãi, chào hàng cạnh tranh, chỉ định thầu) nhưng phải lập kế hoạch lựa chọn nhà thầu",
      " Phương án A và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Lựa chọn phương án phù hợp nhất đối với nội dung đền bù giải phóng mặt bằng khi lập kế hoạch lựa chọn nhà thầu?",
    "options": [
      " Tất cả nội dung công việc có liên quan đến giải phóng mặt bằng thuộc phần công việc không áp dụng một trong các hình thức lựa chọn nhà thầu",
      " Đối với các công việc mà Hội đồng đền bù giải phóng mặt bằng tự làm (ví dụ: tổ chức họp với người sử dụng đất, chủ sở hữu tài sản; trình duyệt, công khai phương án bồi thường, bàn giao chi phí bồi thường..,) thì thuộc phần không áp dụng một trong các hình thức lựa chọn nhà thầu",
      " Đối với phần việc phải hình thành gói thầu thuê tư vấn để thực hiện nhằm phục vụ công việc giải phóng mặt bằng thì thuộc phần công việc thuộc kế hoạch lựa chọn nhà thầu",
      " Phương án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với các gói thầu đã thanh lý hợp đồng, khi lập tờ trình Kế hoạch lựa chọn nhà thầu, giá trị phần công việc đã thực hiện của các gói thầu này được tính như thế nào?",
    "options": [
      " Giá gói thầu",
      " Giá trị thanh lý hợp đồng",
      " Giá hợp đồng",
      " Tất cả phương án đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Bảo đảm cạnh tranh trong đấu thầu thuộc nội dung đánh giá về?",
    "options": [
      " Tư cách hợp lệ",
      " Năng lực, kinh nghiệm",
      " Kỹ thuật",
      " Tài chính"
    ],
    "correct": "A"
  },
  {
    "question": "Nhà thầu tham gia đấu thầu gói thầu hàng hóa phải độc lập với chủ thể nào sau đây?",
    "options": [
      " Phải độc lập với nhà thầu tư vấn lập hồ sơ mời thầu gói thầu hàng hóa",
      " Phải độc lập với nhà thầu khác khi tham gia đấu thầu rộng rãi",
      " Phải độc lập với nhà thầu tư vấn lập kế hoạch tổng thể lựa chọn nhà thầu",
      " Phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Nhận định nào sau đây không phù hợp với quy định về bảo đảm cạnh tranh trong đấu thầu?",
    "options": [
      " Nhà thầu tham dự thầu phải độc lập với chủ đầu tư, trừ trường hợp: nhà thầu là đơn vị sự nghiệp công lập thuộc cơ quan quản lý nhà nước có chức năng, nhiệm vụ được giao phù hợp với tính chất gói thầu của cơ quan quản lý nhà nước đó; đơn vị sự nghiệp công lập và doanh nghiệp có cùng một cơ quan trực tiếp quản lý, góp vốn; các đơn vị sự nghiệp công lập có cùng một cơ quan trực tiếp quản lý",
      " Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn quản lý dự án, tư vấn giám sát",
      " Nhà thầu tham dự thầu phải độc lập với nhà thầu tư vấn lập, thẩm tra, thẩm định hồ sơ thiết kế, dự toán",
      " Nhà thầu thực hiện hợp đồng phải độc lập với nhà thầu tư vấn lập kế hoạch lựa chọn nhà thầu."
    ],
    "correct": "D"
  },
  {
    "question": "Nội dung nào sau đây không thuộc quy định về bảo đảm cạnh tranh trong đấu thầu khi nhà thầu tham dự thầu đấu thầu rộng rãi gói thầu EPC, EP, EC?",
    "options": [
      " Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra thiết kế FEED",
      " Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo nghiên cứu khả thi trong trường hợp không lập thiết kế FEED",
      " Nhà thầu tham dự thầu phải độc lập với nhà thầu lập, thẩm tra báo cáo kinh tế kỹ thuật trong trường hợp không lập báo cáo nghiên cứu khả thi, không lập thiết kế FEED theo quy định của pháp luật về xây dựng",
      " Nhà thầu tham dự thầu phải độc lập với nhà thầu khác cùng tham dự đấu thầu rộng rãi"
    ],
    "correct": "D"
  },
  {
    "question": "Nội dung nào là nội dung đánh giá tính hợp lệ của hồ sơ dự thầu?",
    "options": [
      " Nhân sự chủ chốt",
      " Hiệu lực của hồ sơ dự thầu",
      " Năng lực tài chính",
      " Việc thực hiện nghĩa vụ kê khai thuế, nộp thuế"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu không qua mạng, nội dung nào không phải là tiêu chuẩn đánh giá về tính hợp lệ của hồ sơ dự thầu gói thầu tư vấn?",
    "options": [
      " Hiệu lực của hồ sơ đề xuất về kỹ thuật đáp ứng yêu cầu theo quy định trong hồ sơ mời thầu",
      " Có bản gốc hồ sơ đề xuất về kỹ thuật",
      " Bảo đảm dự thầu hợp lệ",
      " Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa, xây lắp, phi tư vấn, phương pháp để đánh giá về năng lực và kinh nghiệm là?",
    "options": [
      " Sử dụng tiêu chí đạt, không đạt",
      " Sử dụng phương pháp chấm điểm",
      " Kết hợp cả hai phương pháp: tiêu chí đạt, không đạt và phương pháp chấm điểm",
      " Phương pháp dựa trên kỹ thuật"
    ],
    "correct": "A"
  },
  {
    "question": "Tiêu chuẩn đánh giá năng lực kinh nghiệm đối với gói thầu mua sắm hàng hóa bao gồm?",
    "options": [
      " Doanh thu bình quân 3 năm gần nhất",
      " Giấy phép bán hàng của nhà sản xuất",
      " Số năm thành lập của doanh nghiệp",
      " Năng lực quản lý của doanh nghiệp"
    ],
    "correct": "A"
  },
  {
    "question": "Nội dung nào là tiêu chuẩn đánh giá về năng lực và kinh nghiệm không bắt buộc đối với gói thầu mua sắm hàng hóa áp dụng đấu thầu rộng rãi?",
    "options": [
      " Kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự",
      " Giá trị tài sản ròng của nhà thầu",
      " Doanh thu của nhà thầu",
      " Việc thực hiện nghĩa vụ kê khai thuế, nộp thuế"
    ],
    "correct": "A"
  },
  {
    "question": "Nội dung nào là tiêu chuẩn đánh giá đánh giá về năng lực và kinh nghiệm bắt buộc đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi không qua mạng?",
    "options": [
      " Có bản gốc hồ sơ dự thầu",
      " Có tên trong danh sách ngắn",
      " Năng lực tài chính",
      " Có bảo đảm dự thầu hợp lệ"
    ],
    "correct": "C"
  },
  {
    "question": "Tiêu chuẩn đánh giá về kỹ thuật được yêu cầu về nhãn hiệu theo nhóm nhãn hiệu cho nguyên nhiên vật liệu, vật tư và các yếu tố đầu vào đối với trường hợp nào?",
    "options": [
      " Nội dung công việc xây lắp thuộc gói thầu xây lắp, gói thầu EC",
      " Nội dung công việc xây lắp thuộc gói thầu EPC",
      " Nội dung công việc xây lắp thuộc gói thầu EPC và gói thầu PC",
      " Nội dung công việc xây lắp thuộc gói thầu xây lắp và gói thầu PC"
    ],
    "correct": "A"
  },
  {
    "question": "Nội dung nào không phải là tiêu chuẩn đánh giá về kỹ thuật của gói thầu tư vấn?",
    "options": [
      " Giải pháp phương pháp luận",
      " Uy tín của nhà thầu thông qua việc tham dự thầu, kết quả thực hiện hợp đồng của nhà thầu",
      " Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
      " Kinh nghiệm và năng lực nhà thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Một trong các căn cứ lập hồ sơ mời thầu là?",
    "options": [
      " Báo giá của nhà thầu",
      " Quyết định mua sắm được phê duyệt",
      " Kế hoạch lựa chọn nhà thầu được duyệt",
      " Phương án B và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu cung cấp dịch vụ tư vấn, phương pháp đánh giá nào không được áp dụng?",
    "options": [
      " Giá thấp nhất",
      " Giá đánh giá",
      " Kết hợp giữa kỹ thuật và giá",
      " Giá cố định"
    ],
    "correct": "B"
  },
  {
    "question": "Nội dung nào sau đây không thuộc hồ sơ mời thầu?",
    "options": [
      " Chỉ dẫn nhà thầu, tùy chọn mua thêm",
      " Bảng dữ liệu đấu thầu",
      " Phạm vi cung cấp, yêu cầu về kỹ thuật",
      " Biên bản hoàn thiện hợp đồng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào hồ sơ mời thầu được đưa ra yêu cầu về giấy phép bán hàng?",
    "options": [
      " Hàng hóa thông thường, có sẵn trên thị trường",
      " Hàng hóa nhập khẩu",
      " Hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
      " Hàng hóa có giá trị lớn"
    ],
    "correct": "C"
  },
  {
    "question": "Nội dung nào sau đây nếu đưa vào E-HSMT của gói thầu mua sắm hàng hóa áp dụng hình thức đấu thầu rộng rãi qua mạng có thể bị đánh giá là hạn chế cạnh tranh?",
    "options": [
      " Yêu cầu nhà thầu cung cấp tài liệu chứng minh hợp đồng tương tự",
      " Yêu cầu nhà thầu phải là chủ sở hữu thiết bị chào thầu",
      " Yêu cầu nhà thầu có năng lực tài chính lành mạnh",
      " Yêu cầu nhà thầu phải hoàn thành nghĩa vụ thuế"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu mua sắm máy điều hòa không khí của Sở Tài chính tỉnh X được tổ chức đấu thầu tập trung theo hình thức đấu thầu rộng rãi qua mạng thì E-HSMT có được nêu xuất xứ hàng hóa không?",
    "options": [
      " Được nêu xuất xứ cụ thể của một nước bất kỳ",
      " Được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
      " Được nêu xuất xứ cụ thể của một nước bất kỳ nhưng phải kèm theo cụm từ \"hoặc tương đương\"",
      " Không được nêu xuất xứ theo nhóm nước, vùng lãnh thổ"
    ],
    "correct": "B"
  },
  {
    "question": "Khi tham dự thầu đấu thầu qua mạng, đại diện hợp pháp của nhà thầu có được ủy quyền cho Giám đốc chi nhánh để ký đơn dự thầu hay không?",
    "options": [
      " Được ủy quyền nhưng phải bằng văn bản",
      " Không được ủy quyền",
      " Được ủy quyền nhưng phải tạo tài khoản nghiệp vụ cho Giám đốc chi nhánh khi tham dự thầu trên Hệ thống mạng đấu thầu quốc gia",
      " Các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu rộng rãi qua mạng, trường hợp gói thầu có giá trị bảo đảm dự thầu nhỏ hơn 50 triệu đồng, thời gian có hiệu lực của thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh được quy định tại đâu?",
    "options": [
      " Trong E-HSMT",
      " Trong thông báo mời đối chiếu tài liệu",
      " Trong thông báo mời thương thảo hợp đồng",
      " Các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu rộng rãi qua mạng, trường hợp gói thầu có giá trị bảo đảm dự thầu nhỏ hơn 50 triệu đồng, nhà thầu thực hiện nộp thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh thì thời gian có hiệu lực của thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh được tính từ ngày nào?",
    "options": [
      " Ngày có thời điểm đóng thầu",
      " Ngày phê duyệt kết quả lựa chọn nhà thầu",
      " Ngày thực hiện đối chiếu tài liệu",
      " Các phương án trên đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp EHSMT có yêu cầu cung cấp hàng mẫu, nhà thầu có thể nộp bổ sung hàng mẫu theo phương án nào sau đây?",
    "options": [
      " Trong thời hạn 07 ngày làm việc sau thời điểm đóng thầu",
      " Trong thời hạn 07 ngày làm việc sau thời điểm mở thầu",
      " Trong thời hạn 05 ngày làm việc sau thời điểm đóng thầu",
      " Không được nộp bổ sung hàng mẫu sau thời điểm đóng thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu tư vấn tổ chức đấu thầu rộng rãi qua mạng, sử dụng thang điểm 1.000 để xây dựng tiêu chuẩn đánh giá về kỹ thuật, E-HSMT quy định số điểm đối với tiêu chí đánh giá về uy tín của nhà thầu thông qua việc tham dự thầu, kết quả thực hiện hợp đồng của nhà thầu là bao nhiêu?",
    "options": [
      " 150 điểm",
      " 100 điểm",
      " 50 điểm",
      " Từ 0 đến 49 điểm"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu thuê hệ thống máy chủ áp dụng đấu thầu rộng rãi qua mạng, thời gian thực hiện gói thầu là 5 năm (có tính chất công việc lặp lại theo chu kỳ qua các năm), giá gói thầu là 5 tỷ đồng, quy mô hợp đồng tương tự tối thiểu được quy định trong EHSMT là bao nhiêu thì phù hợp quy định?",
    "options": [
      " 2,5 tỷ đồng",
      " 2 tỷ đồng",
      " 1,5 tỷ đồng",
      " 300 triệu đồng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu quốc tế, hồ sơ mời thầu phải quy định sử dụng lao động trong nước trong trường hợp nào?",
    "options": [
      " Những vị trí công việc mà lao động trong nước đáp ứng được và có khả năng cung cấp",
      " Những vị trí công việc mà lao động trong nước không đáp ứng được nhưng cần tạo điều kiện để tiếp nhận công nghệ từ nước ngoài được chuyển giao",
      " Lao động phổ thông",
      " Phương án A và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp hồ sơ mời thầu có quy định về xuất xứ theo nhóm nước, vùng lãnh thổ mà không bao gồm xuất xứ Việt Nam, nhà thầu chào hàng hóa có xuất xứ Việt Nam sẽ bị đánh giá như thế nào?",
    "options": [
      " Hàng hóa của nhà thầu không được xem xét, đánh giá",
      " Hàng hóa của nhà thầu vẫn được xem xét, đánh giá",
      " Yêu cầu nhà thầu bổ sung hàng hóa theo đúng xuất xứ thuộc nhóm nước, vùng lãnh thổ theo yêu cầu hồ sơ mời thầu nhưng phải cùng ký mã hiệu, nhãn hiệu với hàng hóa nhà thầu đã đề xuất trong hồ sơ dự thầu",
      " Yêu cầu nhà thầu bổ sung hàng hóa theo đúng xuất xứ thuộc nhóm nước, vùng lãnh thổ theo yêu cầu hồ sơ mời thầu, không phải đáp ứng cùng ký mã hiệu, nhãn hiệu với hàng hóa nhà thầu đã đề xuất trong hồ sơ dự thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu mua sắm 20 máy điều hòa, tổ chức đấu thầu rộng rãi qua mạng, một giai đoạn một túi hồ sơ, trường hợp E-HSMT có quy định về kinh nghiệm thực hiện hợp đồng tương tự thì tính chất tương tự được quy định như thế nào?",
    "options": [
      " Quy định hàng hóa thuộc cùng lĩnh vực tổng quát với máy điều hòa (thiết bị điện...)",
      " Chỉ quy định hàng hóa có cùng mã Chương, mã Nhóm (tương ứng với 4 số đầu tiên của bộ mã) trong Hệ thống mã HS với mã HS của máy điều hòa",
      " Được quy định hàng hóa thuộc cùng chủng loại hoặc hàng hóa có cùng mã Chương, mã Nhóm (tương ứng với 4 số đầu tiên của bộ mã) trong Hệ thống mã HS với mã HS của máy điều hòa",
      " Tất cả đáp án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Tiêu chuẩn đánh giá về kỹ thuật gói thầu dịch vụ phi tư vấn không bao gồm nội dung nào sau đây?",
    "options": [
      " Nhà thầu bị đánh giá về uy tín trong việc tham dự thầu",
      " Bảo đảm điều kiện vệ sinh môi trường và các điều kiện khác như phòng cháy, chữa cháy, an toàn lao động.",
      " Mức độ đáp ứng các yêu cầu về bảo hành, bảo trì (nếu có);",
      " Tất cả đáp án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Nhận định nào sau đây là đúng về tiêu chuẩn đánh giá E-HSDT gói thầu dịch vụ tư vấn tổ chức đấu thầu rộng rãi qua mạng?",
    "options": [
      " Có thể không quy định về tiêu chuẩn kinh nghiệm và năng lực trong tiêu chuẩn đánh giá về kỹ thuật",
      " Không được quy định mức điểm tối thiểu về kinh nghiệm và năng lực trong tiêu chuẩn đánh giá về kỹ thuật",
      " Không được quy định uy tín của nhà thầu thông qua việc tham dự thầu trong tiêu chuẩn đánh giá về kỹ thuật",
      " Hợp đồng tương tự được xác định trên cơ sở tương tự cả về tính chất và quy mô (giá trị hợp đồng)"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu xây dựng “Trường trung học phổ thông A”, bao gồm tổ hợp các công trình:\n+ Nhà A1 (Nhà học): Cao 10 tầng, tổng diện tích sàn 8.000 m2, có giá trị theo dự toán được duyệt là (2X) VND. Nhà A1 là công trình kết cấu dạng nhà cấp II theo quy định của Thông tư số 06/2021/TT-BXD.\n+ Nhà A2 (Nhà học): Cao 6 tầng, tổng diện tích sàn 1.000 m2, có giá trị theo dự toán được duyệt là (Y) VND. Nhà A2 là công trình kết cấu dạng nhà cấp III theo quy định của Thông tư số 06/2021/TT-BXD.\n+ Hàng rào bảo vệ: Cao 3m\n+ Nhà bảo vệ: Cao 1 tầng, diện tích sàn 12 m2.\nKinh nghiệm thi công công trình tương tự được quy định trong hồ sơ mời thầu như thế nào là phù hợp?",
    "options": [
      " Nhà thầu đã hoàn thành công trình xây dựng nhà, kết cấu dạng nhà cấp II, có giá trị tối thiểu là 50% x (2X) VND",
      " Nhà thầu đã hoàn thành công trình xây dựng nhà, kết cấu dạng nhà cấp II, có giá trị tối thiểu là 50% x (2X) VND, trong đó phải bao gồm hạng mục hàng rào bảo vệ, nhà bảo vệ",
      " Nhà thầu đã hoàn thành công trình xây dựng nhà, kết cấu dạng nhà cấp III, có giá trị tối thiểu là 50% x (2X) VND",
      " Nhà thầu đã hoàn thành công trình xây dựng nhà, kết cấu dạng nhà cấp III, có giá trị tối thiểu là 50% x (2X) VND, trong đó phải bao gồm hạng mục hàng rào bảo vệ, nhà bảo vệ"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu áp dụng chào hàng cạnh tranh, việc đánh giá về kỹ thuật thực hiện theo phương án nào sau đây?",
    "options": [
      " Phải sử dụng phương pháp đánh giá “đạt”, “không đạt”",
      " Phải sử dụng phương pháp chấm điểm",
      " Được sử dụng một trong hai phương pháp “đạt”, “không đạt” hoặc chấm điểm",
      " Chỉ cần yêu cầu nhà thầu cam kết đáp ứng yêu cầu về kỹ thuật"
    ],
    "correct": "A"
  },
  {
    "question": "Chủ đầu tư dự kiến mua sắm hàng hóa (không phải mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn) như sau:\n- Hàng hóa A có mã HS là 9035, giá trị dự toán là 4.000.000.000 đồng\n- Hàng hóa B có mã HS là 9035, giá trị dự toán là 6.000.000.000\nE-HSMT yêu cầu về kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự trong trường hợp nào sau đây là phù hợp?",
    "options": [
      " Cung cấp 01 hợp đồng có mã hàng hóa 9035 với giá trị tối thiểu 02 tỷ đồng",
      " Cung cấp 01 hợp đồng có mã hàng hóa 9035 với giá trị tối thiểu 03 tỷ đồng",
      " Cung cấp 01 hợp đồng có mã hàng hóa 9035 với giá trị tối thiểu 05 tỷ đồng",
      " Cung cấp 01 hợp đồng có mã hàng hóa 9035 với giá trị tối thiểu 07 tỷ đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu mua sắm hàng hóa có khối lượng, số lượng công việc căn cứ nhu cầu theo các năm và thời gian thực hiện gói thầu là 02 năm thì E-HSMT quy định về giá trị của hợp đồng tương tự như thế nào?",
    "options": [
      " Có giá trị bằng 50% giá gói thầu",
      " Có giá trị bằng 70% giá gói thầu",
      " Có giá trị bằng 50% giá trị theo chu kỳ 01 năm của gói thầu",
      " Có giá trị tối thiểu bằng 50% giá gói thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Nội dung nào không phù hợp với quy định về nhà thầu phụ đối với gói thầu mua sắm hàng hóa?",
    "options": [
      " Chủ đầu tư phải ghi tỷ lệ % giá trị dành cho nhà thầu phụ trong E-BDL làm cơ sở để nhà thầu lập E-HSDT",
      " Năng lực và kinh nghiệm của nhà thầu phụ sẽ không được xem xét khi đánh giá E-HSDT của nhà thầu",
      " Nhà thầu được ký kết hợp đồng với các nhà thầu phụ trong danh sách các nhà thầu phụ nêu trong E-HSDT",
      " Nhà thầu được ký kết hợp đồng với các nhà thầu phụ được chủ đầu tư chấp thuận để tham gia thực hiện cung cấp dịch vụ liên quan"
    ],
    "correct": "A"
  },
  {
    "question": "Trong quá trình đánh giá hồ sơ dự thầu gói thầu áp dụng đấu thầu rộng rãi, chủ đầu tư phát hiện người đại diện theo pháp luật của 02 nhà thầu tham dự thầu là anh em ruột thì xem xét, đánh giá như thế nào?",
    "options": [
      " Thuộc hành vi bị cấm trong đấu thầu",
      " Không đáp ứng yêu cầu về bảo đảm cạnh tranh trong đấu thầu",
      " Hồ sơ dự thầu của một trong hai nhà thầu không được xem xét",
      " Không thuộc hành vi bị cấm, không vi phạm quy định về bảo đảm cạnh tranh trong đấu thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Việc đánh giá nhà thầu đang trong thời gian bị cấm tham dự thầu thuộc nội dung đánh giá về?",
    "options": [
      " Kỹ thuật",
      " Tài chính",
      " Tư cách hợp lệ",
      " Năng lực, kinh nghiệm"
    ],
    "correct": "C"
  },
  {
    "question": "Khi đánh giá về năng lực kinh nghiệm đối với gói thầu mua sắm hàng hóa áp dụng đấu thầu rộng rãi, nhà thầu được đánh giá là đạt khi nào?",
    "options": [
      " Nhà thầu được đánh giá đạt tất cả tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      " Nhà thầu đáp ứng một trong các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      " Nhà thầu đáp ứng hai phần ba các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
      " Nhà thầu đáp ứng các tiêu chuẩn đánh giá về năng lực và kinh nghiệm quan trọng trong hồ sơ mời thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Việc đánh giá về nhân sự chủ chốt và thiết bị chủ yếu đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi được thực hiện như thế nào?",
    "options": [
      " Đánh giá đối với tất cả các nhà thầu tham dự thầu",
      " Đánh giá đối với nhà thầu xếp thứ nhất",
      " Đánh giá đối với tất cả các nhà thầu được đánh giá đạt về kỹ thuật",
      " Không đánh giá về nhân sự chủ chốt và thiết bị chủ yếu"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa áp dụng hình thức chào hàng cạnh tranh, trường hợp hồ sơ mời thầu không yêu cầu về năng lực, kinh nghiệm thì việc đánh giá được thực hiện như thế nào?",
    "options": [
      " Không phải đánh giá về năng lực, kinh nghiệm nhưng nhà thầu phải cam kết đáp ứng năng lực, kinh nghiệm trong đơn dự thầu",
      " Trường hợp nhà thầu đính kèm tài liệu về năng lực, kinh nghiệm thì chủ đầu tư bắt buộc phải đánh giá về năng lực, kinh nghiệm của nhà thầu",
      " Bắt buộc phải đánh giá năng lực, kinh nghiệm của nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi, có bắt buộc quy định việc đánh giá đối với yêu cầu về nguồn lực tài chính trong hồ sơ mời thầu phải bằng cam kết tín dụng không?",
    "options": [
      " Bắt buộc quy định trong hồ sơ mời thầu do đây là tiêu chí chứng minh nguồn lực tài chính",
      " Không bắt buộc quy định, hồ sơ mời thầu có thể đưa ra yêu cầu về cam kết cung cấp tín dụng hoặc không yêu cầu về cam kết cung cấp tín dụng",
      " Bắt buộc quy định trong hồ sơ mời thầu đối với gói thầu xây lắp áp dụng phương thức một giai đoạn hai túi hồ sơ",
      " Bắt buộc quy định trong hồ sơ mời thầu đối với gói thầu có giá trên 20 tỷ đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu chia thành 2 phần (phần 1: mua sắm máy tính; phần 2: mua sắm bàn ghế cho cán bộ công chức), áp dụng phương pháp giá thấp nhất (máy tính và bàn ghế là hàng hóa thuộc danh mục do Chính phủ, Thủ tướng Chính phủ quy định tiêu chuẩn, định mức), việc xét duyệt trúng thầu trong trường hợp này được thực hiện như thế nào?",
    "options": [
      " Giá đề nghị trúng thầu của từng hàng hóa đảm bảo không vượt mức giá của từng hàng hóa đó theo tiêu chuẩn, định mức do cấp có thẩm quyền ban hành và tổng giá đề nghị trúng thầu của gói thầu là thấp nhất, không vượt giá gói thầu được duyệt",
      " Tổng giá đề nghị trúng thầu của gói thầu là thấp nhất và không vượt giá gói thầu được duyệt mà không so sánh với ước tính chi phí của từng phần, không cần so sánh với tiêu chuẩn, định mức từng mặt hàng",
      " Giá từng phần thấp nhất, tổng giá đề nghị trúng thầu không vượt giá gói thầu được duyệt, không cần so sánh với tiêu chuẩn, định mức từng mặt hàng",
      " Tất cả phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu xây lắp áp dụng đấu thầu rộng rãi qua mạng, trường hợp E-HSMT quy định nhà thầu phải cung cấp đầy đủ các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật để chứng minh khả năng huy động thiết bị thi công chủ yếu thì nhà thầu phải cung cấp những tài liệu nào?",
    "options": [
      " Phải cung cấp đầy đủ theo yêu cầu của E-HSMT gồm: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      " Chỉ cần cung cấp một trong các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      " Phải bắt buộc cung cấp giấy đăng ký thiết bị kèm theo giấy đăng kiểm, kiểm định theo quy định của pháp luật",
      " Phải bắt buộc cung cấp hợp đồng, hóa đơn mua hàng"
    ],
    "correct": "B"
  },
  {
    "question": "Danh sách xếp hạng nhà thầu có phải thẩm định trước khi phê duyệt hay không?",
    "options": [
      " Phải thẩm định trong trường hợp có hơn 01 nhà thầu trong danh sách xếp hạng",
      " Không phải thẩm định",
      " Do người có thẩm quyền quyết định",
      " Phương án A và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu xây lắp áp dụng hình thức đấu thầu rộng rãi trong nước (không áp dụng sơ tuyển), trường hợp tại thời điểm đóng thầu chỉ có 01 nhà thầu nộp hồ sơ dự thầu thì xử lý như thế nào?",
    "options": [
      " Mở thầu ngay để tiến hành đánh giá",
      " Gia hạn thời điểm đóng thầu tối thiểu 10 ngày",
      " Báo cáo người có thẩm quyền xem xét, quyết định",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu xây lắp, trường hợp công ty mẹ tham dự thầu và huy động công ty con tham gia thực hiện gói thầu thì việc đánh giá kinh nghiệm thực hiện hợp đồng tương tự được thực hiện như thế nào?",
    "options": [
      " Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ, không đánh giá kinh nghiệm của công ty con",
      " Đánh giá kinh nghiệm thực hiện hợp đồng tương tự căn cứ vào giá trị, khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu",
      " Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty con, không đánh giá kinh nghiệm của công ty mẹ, không phân biệt khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu",
      " Đánh giá theo tổng kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ và công ty con, không phân biệt khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Kinh nghiệm thực hiện hợp đồng xây lắp tương tự gói thầu chỉ bao gồm 01 công trình độc lập được xét trên cơ sở nào sau đây?",
    "options": [
      " Xét theo công trình nhà thầu đã hoàn thành toàn bộ hoặc hoàn thành phần lớn có cùng loại kết cấu, cấp công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      " Chỉ xét theo công trình nhà thầu đã hoàn thành toàn bộ, đã được nghiệm thu, cùng loại công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      " Xét theo các hạng mục công việc có tính chất tương tự nhà thầu đã hoàn thành phần lớn và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa tổ chức đấu thầu rộng rãi qua mạng, kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự được xét trên cơ sở nào sau đây?",
    "options": [
      " Hàng hóa phải cùng chủng loại với gói thầu đang xét",
      " Hàng hóa thuộc cùng lĩnh vực tổng quát với hàng hóa của gói thầu",
      " Hàng hóa có 4 số đầu tiên mã HS cùng với mã HS của hàng hóa thuộc gói thầu",
      " Cả 2 phương án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu dịch vụ phi tư vấn chia thành nhiều phần thì việc đánh giá về doanh thu đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
    "options": [
      " Việc đánh giá về doanh thu căn cứ trên tổng giá trị doanh thu bình quân yêu cầu đối với các phần mà nhà thầu tham dự",
      " Việc đánh giá về doanh thu căn cứ trên từng phần mà nhà thầu tham dự, nhà thầu không phải đáp ứng tổng doanh thu đối với các phần mà nhà thầu tham dự",
      " Việc đánh giá về doanh thu căn cứ trên phần có giá trị lớn nhất trong tổng số các phần nhà thầu tham dự",
      " Các phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu mua sắm hàng hóa chia thành nhiều phần thì việc đánh giá về quy mô hợp đồng tương tự đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
    "options": [
      "Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
      " Việc đánh giá về quy mô hợp đồng tương tự tương ứng với từng phần mà nhà thầu tham dự, nhà thầu không phải đáp ứng tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
      " Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên phần có giá trị nhỏ nhất trong tổng số các phần mà nhà thầu tham dự",
      " Các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp E-HSMT của gói thầu mua sắm hàng hóa có yêu cầu về cam kết, hợp đồng nguyên tắc bảo hành, bảo trì, duy tu, bảo dưỡng mà E-HSDT của nhà thầu không đính kèm các tài liệu này thì Chủ đầu tư xử lý như thế nào?",
    "options": [
      " Hồ sơ dự thầu của nhà thầu bị loại, không được xem xét, đánh giá",
      " Chủ đầu tư yêu cầu nhà thầu làm rõ, bổ sung tài liệu trong một khoảng thời gian phù hợp nhưng không ít hơn 03 ngày làm việc để làm cơ sở đánh giá E-HSDT",
      " Xin ý kiến người có thẩm quyền để xử lý tình huống trong đấu thầu trên cơ sở bảo đảm các mục tiêu của công tác đấu thầu",
      " Tiếp tục đánh giá E-HSDT, trường hơp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ tài liệu"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa áp dụng đấu thầu rộng rãi, trong hồ sơ dự thầu nhà thầu không đề xuất cụ thể ký mã hiệu, nhãn hiệu, xuất xứ, hãng sản xuất thì xử lý như thế nào?",
    "options": [
      " Chủ đầu tư yêu cầu nhà thầu làm rõ các thông tin này để làm cơ sở đánh giá trên cơ sở không được thay đổi giá dự thầu",
      " Tổ chuyên gia căn cứ theo cataloge, đề xuất kỹ thuật kèm theo để làm cơ sở đánh giá",
      " Hồ sơ dự thầu của nhà thầu không được xem xét, đánh giá",
      " Tiếp tục đánh giá hồ sơ dự thầu, trường hơp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ các thông tin này"
    ],
    "correct": "C"
  },
  {
    "question": "Hồ sơ mời thầu của gói thầu xây lắp có quy định cho phép sử dụng nhà thầu phụ, trường hợp nhà thầu đề xuất sử dụng thầu phụ thì việc đánh giá năng lực, kinh nghiệm của nhà thầu phụ được thực hiện như thế nào?",
    "options": [
      " Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu không phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
      " Không đánh giá năng lực, kinh nghiệm của nhà thầu phụ, nhà thầu tham dự thầu vẫn phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
      " Do chủ đầu tư quyết định đánh giá hoặc không đánh giá năng lực, kinh nghiệm nhà thầu phụ",
      " Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu cũng phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp cần sửa đổi E-HSDT đã nộp trước thời điểm đóng thầu, nhà thầu phải thực hiện theo phương án nào sau đây trong trường hợp EHSMT của gói thầu này không phải sửa đổi?",
    "options": [
      " Phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó để sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      " Không phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó, chỉ cần sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      " Sửa đổi cho phù hợp E-HSDT đã nộp mà không phải nộp lại E-HSDT mới",
      " Nhà thầu không được sửa đổi E-HSDT đã nộp"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nhà thầu đã nộp E-HSDT nhưng sau đó E-HSMT của gói thầu này sửa đổi thì nhà thầu cần thực hiện theo phương án nào sau đây?",
    "options": [
      " Phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó để sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      " Không phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó, chỉ cần sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới",
      " Sửa đổi cho phù hợp E-HSDT đã nộp mà không phải nộp lại E-HSDT mới",
      " Các phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp nhà thầu rút E-HSDT sau thời điểm đóng thầu và trong thời gian có hiệu lực của E-HSDT thì nhà thầu bị xử lý theo phương án nào sau đây?",
    "options": [
      " Không được hoàn trả bảo đảm dự thầu",
      " Bị đánh giá là không đảm bảo uy tín khi tham dự thầu",
      " Không được tiếp tục đánh giá E-HSDT",
      " Các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào sau đây, nhà thầu được đánh giá là không đáp ứng quy định về bảo đảm cạnh tranh khi tham dự thầu gói thầu tổ chức đấu thầu rộng rãi?",
    "options": [
      " Đơn vị sự nghiệp công lập A thuộc Sở Tài chính tỉnh X tham gia gói thầu do Sở Tài chính tỉnh X là chủ đầu tư mà chức năng, nhiệm vụ của đơn vị sự nghiệp công lập A phù hợp với gói thầu",
      " Đơn vị sự nghiệp công lập A tham gia gói thầu do Chi cục B là chủ đầu tư. Chức năng nhiệm vụ của đơn vị sự nghiệp công lập A phù hợp với tính chất gói thầu. Đơn vị sự nghiệp công lập A và Chi cục B lần lượt là đơn vị sự nghiệp công lập và đơn vị hành chính do Sở Tài Chính tỉnh X trực tiếp quản lý",
      " Đơn vị sự nghiệp công lập A tham gia gói thầu do đơn vị sự nghiệp công lập B là chủ đầu tư và cả hai đơn vị đều là đơn vị sự nghiệp do Sở Tài chính tỉnh X trực tiếp quản lý",
      " Doanh nghiệp C tham gia gói thầu có sử dụng vốn ngân sách nhà nước do đơn vị sự nghiệp công lập A là chủ đầu tư. Đơn vị sự nghiệp công lập A và Doanh nghiệp C đều là đơn vị do Sở X trực tiếp quản lý"
    ],
    "correct": "B"
  },
  {
    "question": "Nhà thầu có được tham dự thầu với tư cách nhà thầu liên danh trong trường hợp phạm vi công việc của gói thầu mua sắm hàng hóa chỉ gồm 01 hạng mục là hệ thống máy chủ không?",
    "options": [
      " Được liên danh nếu nhà thầu phân chia công việc trong liên danh theo các công việc thuộc quá trình sản xuất hạng mục trong bảng giá dự thầu",
      " Không được liên danh, nhà thầu chỉ được tham dự với tư cách độc lập do phạm vi công việc chỉ gồm 01 hạng mục",
      " Được liên danh trong trường hợp 01 thành viên thực hiện toàn bộ hạng mục hệ thống máy chủ, thành viên còn lại thực hiện thu xếp tài chính cho gói thầu",
      " Phương án A và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Có 4 nhà thầu tham dự thầu gói thầu mua sắm hàng hóa áp dụng phương pháp giá thấp nhất, trong đó:\n- Nhà thầu A, B, D là doanh nghiệp nhỏ và vừa do phụ nữ làm chủ.\n- Nhà thầu A, B, C và D có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá lần lượt là: 95 tỷ đồng, 100 tỷ đồng, 100 tỷ đồng và 105 tỷ đồng.\n- Nhà thầu A, B, C và D chứng minh được hàng hóa mình tham dự có tỷ lệ chi phí sản xuất trong nước lần lượt là: 20%, 40%, 45% và 60%.\nTrong trường hợp tất cả nhà thầu đều đáp ứng về kỹ thuật thì nhà thầu nào được xét duyệt trúng thầu?",
    "options": [
      " Nhà thầu A được xét duyệt trúng thầu",
      " Nhà thầu B được xét duyệt trúng thầu",
      " Nhà thầu C được xét duyệt trúng thầu",
      " Nhà thầu D được xét duyệt trúng thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Trong lễ mở thầu đối với gói thầu đấu thầu quốc tế không qua mạng, chủ đầu tư xử lý như thế nào khi nhà thầu đề nghị bổ sung thư giảm giá do bị thất lạc trong quá trình nộp hồ sơ dự thầu theo đường bưu điện?",
    "options": [
      " Chủ đầu tư chấp nhận do đây là lỗi vận chuyển theo bưu điện",
      " Chủ đầu tư không chấp nhận vì thư giảm giá của nhà thầu nộp sau thời điểm đóng thầu",
      " Chủ đầu tư tạm thời ghi nhận nội dung trong thư giảm giá của nhà thầu và trình Người có thẩm quyền quyết định",
      " Chủ đầu tư coi là tình huống trong đấu thầu và xử lý trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình"
    ],
    "correct": "B"
  },
  {
    "question": "Nhận định nào sau đây là đúng ?",
    "options": [
      " Gói thầu xây lắp, hàng hóa và dịch vụ phi tư vấn áp dụng hình thức chào hàng cạnh tranh và sử dụng phương pháp dựa trên kỹ thuật để đánh giá về tài chính và có giá đề nghị trúng thầu vượt giá gói thầu được phép thương thảo về chi phí",
      " Gói thầu mua thuốc áp dụng phương thức một giai đoạn hai túi hồ sơ và sử dụng phương pháp kết hợp giữa kỹ thuật và giá được phép thương thảo về chi phí trong quá trình thương thảo hợp đồng",
      " Gói thầu dịch vụ tư vấn áp dụng hình thức đấu thầu rộng rãi được phép thương thảo về chi phí trong quá trình thương thảo hợp đồng",
      " Không được phép thương thảo về chi phí trong quá trình thương thảo hợp đồng đối với tất cả các gói thầu, trừ trường hợp nhà thầu tự nguyện giảm giá"
    ],
    "correct": "D"
  },
  {
    "question": "Hợp đồng nào được phép sử dụng để chứng minh hợp đồng tương tự khi tham dự gói thầu cung cấp thuốc có sử dụng ngân sách nhà nước của Bệnh viện?",
    "options": [
      " Hợp đồng thuốc đã cung cấp thuốc cho cơ sở khám chữa bệnh tư nhân",
      " Hợp đồng thuốc đã cung cấp thuốc cho các cơ sở kinh doanh thuốc",
      " Phương án A và B đều đúng",
      " Phương án A và B đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Khi thương thảo hợp đồng đối với gói thầu tư vấn áp dụng đấu thầu rộng rãi qua mạng, trường hợp nào nhà thầu được phép thay đổi nhân sự đã đề xuất trong E-HSDT?",
    "options": [
      " Không được thay đổi nhân sự đã đề xuất trong E-HSDT trong mọi trường hợp",
      " Được thay đổi nhân sự đã đề xuất trong E-HSDT 01 lần trong trường hợp nhân sự không đáp ứng yêu cầu hoặc không chứng minh được khả năng huy động",
      " Được thay đổi nhân sự đã đề xuất trong E-HSDT trong trường hợp do thời gian đánh giá E-HSDT kéo dài hơn so với dự kiến trong kế hoạch lựa chọn nhà thầu hoặc vì lý do bất khả kháng mà các vị trí nhân sự chủ chốt do nhà thầu đã đề xuất không thể tham gia thực hiện hợp đồng",
      " Phương án B và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu xây lắp, áp dụng đấu thầu rộng rãi qua mạng, trường hợp hợp đồng tương tự mà nhà thầu cung cấp trong EHSDT không đáp ứng theo yêu cầu của EHSMT, chủ đầu tư xử lý như thế nào?",
    "options": [
      " Đánh giá nhà thầu không đáp ứng về năng lực, kinh nghiệm. Nhà thầu không được bổ sung, thay thế hợp đồng tương tự khác",
      " Yêu cầu nhà thầu bổ sung, thay thế hợp đồng tương tự khác (được cập nhật từ hồ sơ năng lực của nhà thầu trên Hệ thống). Trường hợp nhà thầu không có hợp đồng đáp ứng yêu cầu của EHSMT thì nhà thầu bị loại",
      " Tiếp tục đánh giá E-HSDT của nhà thầu, trường hợp nhà thầu xếp thứ nhất, cho phép nhà thầu bổ sung, thay thế hợp đồng tương tự khác.",
      " Đồng thời với việc yêu cầu nhà thầu bổ sung hợp đồng thay thế khác thì chủ đầu tư xem xét, điều chỉnh lại yêu cầu về hợp đồng tương tự trong hồ sơ mời thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với với gói thầu hàng hóa áp dụng đấu thầu rộng rãi không qua mạng, trường hợp nào sau đây thư bảo lãnh hoặc giấy chứng nhận bảo hiểm bảo lãnh dự thầu bị đánh giá là không hợp lệ?",
    "options": [
      " Thời gian có hiệu lực dài hơn so với yêu cầu của hồ sơ mời thầu",
      " Có giá trị cao hơn so với yêu cầu của hồ sơ mời thầu",
      " Ký trước khi phát hành hồ sơ mời thầu",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Gói thầu xây lắp tổ chức đấu thầu qua mạng có thời điểm đóng thầu là ngày 20/3/2025, năm tài chính của nhà thầu là 01/01 – 31/12, nhà thầu là công ty cổ phần được thành lập vào năm 2018 và E-HSMT yêu cầu nhà thầu nộp báo cáo tài chính của 03 năm gần nhất thì nhà thầu phải nộp báo cáo tài chính của các năm nào sau đây?",
    "options": [
      " 2020, 2021, 2022",
      " 2021, 2022, 2023",
      " 2021, 2022, 2024",
      " 2019, 2020, 2021"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với công trình đang xét là công trình xây dựng có loại kết cấu dạng nhà cấp II với giá trị công trình là 60 tỷ đồng, E-HSMT có yêu cầu về kinh nghiệm thực hiện hợp đồng xây lắp tương tự, trường hợp nào sau đây được đánh giá là một công trình xây lắp tương tự?",
    "options": [
      " Nhà thầu có 2 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ lần lượt là 30 tỷ đồng, 50 tỷ đồng",
      " Nhà thầu có 2 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ lần lượt là 30 tỷ đồng, 20 tỷ đồng",
      " Nhà thầu có 3 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ lần lượt là 30 tỷ đồng, 20 tỷ đồng, 10 tỷ đồng",
      " Nhà thầu có 1 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ là 60 tỷ đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu cung cấp dịch vụ vệ sinh tòa nhà do Sở Tài chính tỉnh X làm chủ đầu tư có giá gói thầu 01 tỷ đồng, thời gian thực hiện là 12 tháng, hợp đồng tương tự yêu cầu 30% giá gói thầu. Trường hợp nào sau đây nhà thầu được coi là đáp ứng về giá trị của hợp đồng tương tự?",
    "options": [
      " Nhà thầu cung cấp hợp đồng A (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (đã được nghiệm thu) là 100 triệu đồng; hợp đồng B (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (đã được nghiệm thu) là 250 triệu đồng",
      " Nhà thầu cung cấp hợp đồng A (đã nghiệm thu, đã được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà là 300 triệu đồng",
      " Nhà thầu cung cấp hợp đồng A (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (chưa được nghiệm thu) là 100 triệu đồng; hợp đồng B (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (đã được nghiệm thu) là 400 triệu đồng",
      " Tất cả đáp án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu mua sắm trang thiết bị do Sở Tư pháp tỉnh X làm chủ đầu tư có giá gói thầu 03 tỷ đồng, thời gian thực hiện là 12 tháng, trong đó có 02 hạng mục: máy điều hòa (mã HS 8415) giá dự toán 01 tỷ đồng, máy tính xách tay (mã HS 8507) giá dự toán 02 tỷ đồng, hợp đồng tương tự yêu cầu 50% giá gói thầu. Trường hợp nào sau đây nhà thầu được coi là không đáp ứng về giá trị của hợp đồng tương tự?",
    "options": [
      " Nhà thầu cung cấp 02 hợp đồng, trong đó: 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8415 với giá trị 400 triệu đồng, 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8415 với giá trị 100 triệu đồng và mã hàng hóa 8507 với giá trị 01 tỷ đồng",
      " Nhà thầu cung cấp 01 hợp đồng có đầy đủ các mã hàng hóa 8415 và 8507 và tổng giá trị của mã hàng hóa 8415, 8507 trong hợp đồng đã hoàn thành với giá trị 1,6 tỷ đồng",
      " Nhà thầu cung cấp 02 hợp đồng, trong đó: 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8415 với giá trị 600 triệu đồng và 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8507 với giá trị 01 tỷ đồng",
      " Phương án A và B đều không đáp ứng về giá trị hợp đồng tương tự"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu cung cấp dịch vụ giặt là thực hiện đấu thầu qua mạng, E-HSMT có quy định cho phép sử dụng nhà thầu phụ tối đa 20% trên giá dự thầu của nhà thầu. Nhà thầu liên danh A-B, trong đó nhà thầu Công ty A đảm nhận 30% giá trị công việc, Công ty B đảm nhận 70% giá trị công việc. Việc sử dụng nhà thầu phụ đối với từng thành viên liên danh được thực hiện như thế nào?",
    "options": [
      " Công ty A được sử dụng nhà thầu phụ tối đa 20% trên 30% giá trị công việc mà công ty A đảm nhận, Công ty B được sử dụng nhà thầu phụ tối đa 20% trên 70% giá trị công việc mà công ty B đảm nhận",
      " Công ty A được sử dụng nhà thầu phụ tối đa 20% trên tổng giá trị (100%) công việc và Công ty B được sử dụng nhà thầu phụ tối đa 20% trên tổng giá trị (100%) công việc mà Công ty A và Công ty B đảm nhận",
      " Thực hiện theo thỏa thuận giữa Công ty A và Công ty B, Công ty A hoặc Công ty B được sử dụng nhà thầu phụ tối đa 20% trên tổng giá trị (100%) công việc nhưng phải bảo đảm tổng khối lượng công việc của nhà thầu phụ của liên danh A-B tối đa 20% trên tổng giá trị (100%) công việc mà Công ty A và Công ty B đảm nhận",
      " Tất cả đáp án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Nhà thầu liên danh A-B tham dự thầu và nộp bảo đảm dự thầu riêng rẽ, trong quá trình đánh giá hồ sơ dự thầu tổ chuyên gia có bằng chứng cho thấy nhà thầu A có hành vi gian lận, thuộc hành vi bị cấm trong đấu thầu, trong trường hợp này bảo đảm dự thầu của nhà thầu liên danh xử lý như thế nào?",
    "options": [
      " Không hoàn trả bảo đảm dự thầu của cả nhà thầu liên danh A-B",
      " Không hoàn trả bảo đảm dự thầu của nhà thầu A",
      " Không hoàn trả bảo đảm dự thầu của nhà thầu B",
      " Nhà thầu A và nhà thầu B vẫn được hoàn trả bảo đảm dự thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu đang xét là gói thầu giặt cho bệnh viện công lập (có tính chất công việc lặp lại theo chu kỳ qua các năm), có thời gian thực hiện gói thầu trong 3 năm với giá gói thầu là 12 tỷ đồng. Nhà thầu nào được xác định đáp ứng yêu cầu về giá trị hợp đồng tương tự khi tham dự gói thầu này?",
    "options": [
      " Nhà thầu A có 01 hợp đồng giặt là X cho bệnh viện công lập có thời gian thực hiện gói thầu là 48 tháng (đang trong quá trình thực hiện, chưa hoàn thành, chưa được thanh lý), nhưng tính đến thời điểm tham dự thầu, nhà thầu A đã thực hiện được 24 tháng, trong đó giá trị công việc đã được nghiệm thu 12 tháng đầu là 1,2 tỷ đồng;",
      " Nhà thầu B cung cấp 02 hợp đồng, trong đó có hợp đồng giặt X cho khách sạn tư nhân, thời gian thực hiện hợp đồng trong 06 tháng với giá trị là 300 triệu đồng; Hợp đồng giặt là Y cho bệnh viện công lập, thời gian thực hiện hợp đồng trong 24 tháng với giá trị là 3 tỷ đồng, trong đó giá trị công việc đã được nghiệm thu 12 tháng đầu là 1 tỷ đồng.",
      " Nhà thầu A và B đều đáp ứng",
      " Nhà thầu A và B đều không đáp ứng"
    ],
    "correct": "C"
  },
  {
    "question": "Trường hợp E-HSMT gói thầu xây lắp yêu cầu về cam kết cung cấp tín dụng, nhà thầu được chứng minh bằng cách nào?",
    "options": [
      " Bằng số dư tài khoản hoặc tiền gửi tiết kiệm từ ngân hàng",
      " Bằng cam kết cung cấp tín dụng của ngân hàng",
      " Bằng xác nhận số dư hạn mức tín dụng khả dụng từ ngân hàng",
      " Tất cả các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Hợp đồng theo tỷ lệ phần trăm có thể được áp dụng đối với gói thầu nào sau đây?",
    "options": [
      " Mua sắm thiết bị y tế",
      " Xây dựng công trình",
      " Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu",
      " Tư vấn giám sát"
    ],
    "correct": "C"
  },
  {
    "question": "Cơ sở để thanh toán hợp đồng cho nhà thầu là gì?",
    "options": [
      " Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
      " Dự toán gói thầu và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
      " Dự toán gói thầu",
      " Phương án A và C đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Nhà thầu không được hoàn trả bảo đảm thực hiện hợp đồng trong trường hợp nào?",
    "options": [
      " Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực",
      " Thực hiện hợp đồng chậm tiến độ nhưng vẫn hoàn thành hợp đồng",
      " Nhà thầu đề nghị điều chỉnh tiến độ do bất khả kháng",
      " Nhà thầu đề xuất thay đổi nhà thầu phụ"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp nào sau đây phải áp dụng bảo đảm thực hiện hợp đồng?",
    "options": [
      " Nhà thầu cung dịch vụ phi tư vấn",
      " Nhà thầu thực hiện gói thầu có giá gói thầu thuộc hạn mức chỉ định thầu",
      " Nhà thầu cung cấp dịch vụ tư vấn",
      " Nhà thầu được lựa chọn theo hình thức tự thực hiện"
    ],
    "correct": "A"
  },
  {
    "question": "Hồ sơ hợp đồng bao gồm các tài liệu nào sau đây?",
    "options": [
      " Văn bản hợp đồng",
      " Phụ lục hợp đồng gồm danh mục chi tiết về phạm vi công việc, biểu giá, tiến độ thực hiện (nếu có)",
      " Quyết định phê duyệt kết quả lựa chọn nhà thầu",
      " Tất cả các phương án trên."
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu không qua mạng, quy định về việc công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia nào sau đây là đúng?",
    "options": [
      " Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 24 giờ kể từ thời điểm mở thầu",
      " Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 02 giờ kể từ thời điểm mở thầu",
      " Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 04 giờ kể từ thời điểm mở thầu",
      " Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 03 ngày làm việc kể từ thời điểm mở thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Chủ đầu tư A và nhà thầu B đã ký kết hợp đồng cung cấp 11000 đơn vị hàng hóa, loại hợp đồng theo đơn giá cố định. Trong quá trình thực hiện hợp đồng, nhu cầu sử dụng thực tế mà nhà thầu phải cung cấp cho chủ đầu tư chỉ là 10500 đơn vị hàng hóa. Hãy lựa chọn phương án đúng về sửa đổi hợp đồng trong trường hợp này?",
    "options": [
      " Chủ đầu tư A và nhà thầu B bắt buộc phải thực hiện thủ tục sửa đổi hợp đồng, phải ký kết văn bản sửa đổi hợp đồng",
      " Chủ đầu tư A và nhà thầu B không cần thực hiện thủ tục sửa đổi hợp đồng, không phải ký kết văn bản sửa đổi hợp đồng",
      " Chủ đầu tư A và nhà thầu B bắt buộc phải thực hiện thủ tục ký phụ lục hợp đồng để điều chỉnh khối lượng",
      " Phương án A và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp nào sau đây các bên không phải thỏa thuận trong hợp đồng về quy trình, thủ tục sửa đổi hợp đồng?",
    "options": [
      " Khi có sự thay đổi về chính sách, pháp luật làm ảnh hưởng trực tiếp đến việc thực hiện hợp đồng",
      " Khi có sự kiện bất khả kháng",
      " Khi thay đổi phương thức vận chuyển, địa điểm giao hàng, dịch vụ liên quan đối với gói thầu mua sắm hàng hóa",
      " Tăng, giảm thời gian đối với hợp đồng theo thời gian; tăng, giảm chi phí trực tiếp thực hiện đối với hợp đồng chi phí cộng phí; tăng, giảm giá trị cơ sở để tính phần trăm chi phí đối với hợp đồng theo tỷ lệ phần trăm; tăng, giảm mức giảm trừ thanh toán, mức tăng giá trị thanh toán đối với hợp đồng theo kết quả đầu ra"
    ],
    "correct": "D"
  },
  {
    "question": "Phát hành hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được thực hiện như thế nào?",
    "options": [
      " Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành sau 01 ngày kể từ khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
      " Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành trước khi đăng tải thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu",
      " Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành sau 03 ngày kể từ khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
      " Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành ngay sau khi đăng tải thành công thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Hãy chọn phương án đúng về đấu thầu trước?",
    "options": [
      " Đấu thầu trước là việc thực hiện trước một số thủ tục trước khi dự án được phê duyệt đầu tư nhằm mục đích đẩy nhanh tiến độ thực hiện dự án, trừ gói thầu cần thực hiện trước khi phê duyệt dự án",
      " Đấu thầu trước là việc thực hiện các gói thầu thuộc giai đoạn chuẩn bị đầu tư",
      " Đấu thầu trước là việc lựa chọn nhà thầu không cần phê duyệt kế hoạch lựa chọn nhà thầu để đẩy nhanh tiến độ thực hiện",
      " Đấu thầu trước là việc thực hiện trước một số thủ tục trước khi dự án, dự toán mua sắm được phê duyệt nhằm mục đích đẩy nhanh tiến độ thực hiện dự án, dự toán mua sắm, trừ gói thầu cần thực hiện trước khi phê duyệt dự án"
    ],
    "correct": "A"
  },
  {
    "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với mua sắm trực tiếp không bao gồm bước nào sau đây?",
    "options": [
      " Thẩm định hồ sơ yêu cầu",
      " Đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu",
      " Phát hành hồ sơ yêu cầu",
      " Phê duyệt và công khai kết quả mua sắm trực tiếp"
    ],
    "correct": "A"
  },
  {
    "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với chào hàng cạnh tranh không bao gồm bước nào sau đây?",
    "options": [
      " Phê duyệt kết quả lựa chọn nhà thầu",
      " Công khai kết quả lựa chọn nhà thầu",
      " Thẩm định kết quả lựa chọn nhà thầu",
      " Hoàn thiện, ký kết và quản lý thực hiện hợp đồng"
    ],
    "correct": "C"
  },
  {
    "question": "Thời gian phê duyệt hồ sơ mời thầu được quy định như thế nào?",
    "options": [
      " Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu",
      " Tối đa là 05 ngày làm việc kể từ ngày tổ chuyên gia trình dự thảo hồ sơ mời thầu trong trường hợp không thẩm định hồ sơ mời thầu",
      " Tối đa là 05 ngày làm việc kể từ ngày tổ thẩm định gửi báo cáo thẩm định hồ sơ mời thầu",
      " Phương án B và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Thời gian phê duyệt kết quả lựa chọn nhà thầu được quy định như thế nào?",
    "options": [
      " Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu",
      " Tối đa là 05 ngày làm việc kể từ ngày tổ chuyên gia trình báo cáo đánh giá hồ sơ dự thầu trong trường hợp không thẩm định kết quả lựa chọn nhà thầu",
      " Tối đa là 05 ngày làm việc kể từ ngày tổ thẩm định trình báo cáo thẩm định kết quả lựa chọn nhà thầu",
      " Phương án B và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Thời gian đánh giá hồ sơ dự thầu được quy định như thế nào?",
    "options": [
      " Tối đa không quá 45 ngày đối với đấu thầu trong nước và không quá 60 ngày đối với đấu thầu quốc tế",
      " Tối đa không quá 30 ngày đối với đấu thầu trong nước và không quá 60 ngày đối với đấu thầu quốc tế",
      " Do người có thẩm quyền, chủ đầu tư có trách nhiệm quyết định",
      " Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với chỉ định thầu theo quy trình rút gọn bao gồm các bước nào sau đây?",
    "options": [
      " Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; thương thảo, hoàn thiện hợp đồng; trình, thẩm định, phê duyệt và công khai kết quả lựa chọn nhà thầu; ký kết hợp đồng",
      " Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; thương thảo hợp đồng; trình, thẩm định, phê duyệt kết quả lựa chọn nhà thầu; ký kết và quản lý thực hiện hợp đồng",
      " Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; hoàn thiện hợp đồng, phê duyệt và công khai kết quả lựa chọn nhà thầu; ký kết và quản lý thực hiện hợp đồng",
      " Lập, phê duyệt hồ sơ yêu cầu; xác định nhà thầu dự kiến được mời nhận hồ sơ yêu cầu; đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu; phê duyệt và công khai kết quả lựa chọn nhà thầu; hoàn thiện, ký kết và quản lý thực hiện hợp đồng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu áp dụng một giai đoạn một túi hồ sơ, trường hợp nào được thực hiện bước thương thảo hợp đồng?",
    "options": [
      " Gói thầu hỗn hợp",
      " Gói thầu mua sắm hàng hóa áp dụng đấu thầu quốc tế",
      " Gói thầu áp dụng đấu thầu hạn chế do có yêu cầu đặc thù về kỹ thuật mà chỉ có một hoặc một số nhà thầu đáp ứng yêu cầu của gói thầu",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Danh mục hàng hóa, dịch vụ áp dụng mua sắm tập trung do Bộ trưởng Bộ Y tế ban hành:",
    "options": [
      " Danh mục mua sắm tập trung cấp quốc gia đối với ô tô trong trường hợp cần thiết",
      " Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị công nghệ thông tin trong trường hợp cần thiết",
      " Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với dịch vụ đơn giản trong trường hợp cần thiết",
      " Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị y tế, vật tư xét nghiệm trong trường hợp cần thiết"
    ],
    "correct": "D"
  },
  {
    "question": "Hình thức lựa chọn nhà thầu khi áp dụng mua sắm tập trung bảo hiểm tài sản cho các cơ quan thuộc tỉnh Y",
    "options": [
      " Đấu thầu rộng rãi.",
      " Đấu thầu hạn chế.",
      " Đàm phán giá.",
      " Đấu thầu rộng rãi và đàm phán giá."
    ],
    "correct": "A"
  },
  {
    "question": "Đơn vị mua sắm tập trung:",
    "options": [
      " Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao",
      " Thực hiện việc lựa chọn nhà thầu trên cơ sở hợp đồng ký với các đơn vị có nhu cầu",
      " Không được thực hiện việc lựa chọn nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Thời hạn của thỏa thuận khung:",
    "options": [
      " Thời hạn áp dụng thỏa thuận khung được quy định là 40 tháng",
      " Thời hạn áp dụng thỏa thuận khung được quy định trong kế hoạch lựa chọn nhà thầu nhưng không quá 36 tháng",
      " Thời hạn áp dụng thỏa thuận khung do người có thẩm quyền quyết định trong kế hoạch lựa chọn nhà thầu",
      " Phương án B và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Tại bước hoàn thiện, ký kết và thực hiện hợp đồng với nhà thầu đối với gói thầu mua sắm tập trung:",
    "options": [
      " Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung",
      " Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
      " Nhà thầu đã ký kết thỏa thuận khung không phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
      " Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng sau thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với các gói thầu mua sắm tập trung, trách nhiệm cung cấp thông tin về kết quả thực hiện hợp đồng của nhà thầu do ai thực hiện?",
    "options": [
      " Đơn vị có nhu cầu mua sắm",
      " Bên mời thầu",
      " Đơn vị tư vấn được thuê làm bên mời thầu",
      " Không phải đăng tải thông tin"
    ],
    "correct": "A"
  },
  {
    "question": "Áp dụng hình thức lựa chọn nhà thầu nào khi mua sắm tập trung đối với gói thầu điều hòa không khí thông dụng, sẵn có trên thị trường, có giá gói thầu là 03 tỷ đồng cho các cơ quan thuộc tỉnh X?",
    "options": [
      " Đấu thầu rộng rãi hoặc mua sắm trực tiếp",
      " Đấu thầu rộng rãi hoặc chỉ định thầu theo hạn mức",
      " Đấu thầu rộng rãi hoặc chào hàng cạnh tranh",
      " Đấu thầu rộng rãi hoặc chỉ định thầu hoặc đám phán giá"
    ],
    "correct": "C"
  },
  {
    "question": "Trách nhiệm trong mua sắm tập trung?",
    "options": [
      " Đơn vị mua sắm tập trung thực hiện trách nhiệm của người có thẩm quyền theo quy định của Luật Đấu thầu",
      " Đơn vị mua sắm tập trung thực hiện trách nhiệm của chủ đầu tư theo quy định của Luật Đấu thầu",
      " Đơn vị mua sắm tập trung thực hiện trách nhiệm của bên mời thầu theo quy định của Luật Đấu thầu",
      " Đơn vị mua sắm tập trung thực hiện trách nhiệm của tổ chuyên gia theo quy định của Luật Đấu thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Nhà thầu đã ký thỏa thuận khung và được đơn vị có nhu cầu mua sắm yêu cầu ký hợp đồng nhưng không ký hợp đồng, không thực hiện biện pháp bảo đảm thực hiện hợp đồng sẽ bị xử lý như thế nào?",
    "options": [
      " Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị có nhu cầu mua sắm công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      " Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị mua sắm tập trung công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia, trừ trường hợp bất khả kháng",
      " Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của đơn vị có nhu cầu mua sắm, trừ trường hợp bất khả kháng",
      " Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn trong thời hạn 06 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của đơn vị có nhu cầu mua sắm, trừ trường hợp bất khả kháng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ theo khả năng cung cấp và áp dụng phương pháp giá thấp nhất, việc lựa chọn danh sách nhà thầu trúng thầu được thực hiện như thế nào?",
    "options": [
      " Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu tối thiểu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm điểm tổng hợp của gói thầu cao nhất",
      " Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu cao nhất",
      " Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu thấp nhất",
      " Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đánh giá của gói thầu là thấp nhất"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ khối lượng mời thầu, danh sách phê duyệt nhà thầu trúng thầu bao gồm:",
    "options": [
      " Danh sách chính (nhà thầu xếp thứ nhất) và danh sách dự bị (nhà thầu xếp thứ 2 trở đi)",
      " Danh sách chính (nhà thầu xếp thứ nhất) và danh sách nhà thầu không đáp ứng yêu cầu của hồ sơ mời thầu",
      " Danh sách các nhà thầu đáp ứng yêu cầu về năng lực và kinh nghiệm theo yêu cầu của hồ sơ mời thầu",
      " Danh sách chính (nhà thầu xếp thứ nhất và nhà thầu xếp thứ 2) và danh sách dự bị (nhà thầu xếp thứ 3 trở đi)"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với hàng hóa, dịch vụ không thuộc danh mục mua sắm tập trung do Chủ tịch UBND tỉnh X ban hành nhưng nhiều cơ quan, tổ chức, đơn vị trong tỉnh X có nhu cầu mua sắm hàng hóa, dịch vụ cùng loại thì thực hiện như thế nào?",
    "options": [
      " Từng cơ quan, tổ chức, đơn vị trong tỉnh X căn cứ vào thỏa thuận khung do UBND tỉnh X đã ký kết trước đó để mua sắm tập trung đối với các hàng hóa, dịch vụ này",
      " Có thể gộp thành một gói thầu để một trong các cơ quan, tổ chức, đơn vị mua sắm hoặc để đơn vị có chức năng mua sắm tập trung thực hiện việc mua sắm đối với các hàng hóa, dịch vụ này",
      " Sở Tài chính thuộc tỉnh X có trách nhiệm thực hiện mua sắm tập trung đối với các hàng hóa, dịch vụ này",
      " Các cơ quan, tổ chức, đơn vị báo cáo lên người có thẩm quyền để phê duyệt kế hoạch chọn nhà thầu theo hình thức mua sắm tập trung đối với các hàng hóa, dịch vụ này"
    ],
    "correct": "B"
  },
  {
    "question": "Phương án nào sau đây được xác định là một bước trong quá trình lựa chọn nhà thầu theo quy trình chỉ định thầu thông thường được pháp luật về đấu thầu quy định?",
    "options": [
      " Xác định tối thiểu 03 nhà thầu có đủ năng lực, kinh nghiệm để mời nhận hồ sơ yêu cầu",
      " Chuẩn bị và gửi dự thảo hợp đồng cho tối thiểu 03 nhà thầu có đủ năng lực, kinh nghiệm để đàm phán hợp đồng",
      " Đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu",
      " Phương án A và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Trường hợp đơn vị được giao nhiệm vụ mua sắm tập trung không đủ năng lực, kinh nghiệm tổ chức lựa chọn nhà thầu thì thực hiện như thế nào?",
    "options": [
      " Vẫn thực hiện nhiệm vụ được giao, tổ chuyên gia không cần phải đáp ứng yêu cầu về năng lực, kinh nghiệm",
      " Phải thực hiện theo nhiệm vụ được giao, không được đi thuê đơn vị tư vấn để thực hiện việc lựa chọn nhà thầu",
      " Được phép thuê đơn vị tư vấn đấu thầu có kinh nghiệm để thực hiện việc lựa chọn nhà thầu",
      " Phương án A và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Phương án nào xác định quy mô của hợp đồng tương tự đối với gói thầu áp dụng mua sắm tập trung là phù hợp?",
    "options": [
      " Trong mọi trường hợp có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,5 (Y thông thường khoảng 50% giá trị của gói thầu đang xét)",
      " Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn thì có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,25 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu",
      " Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn thì có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,5 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu",
      " Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn, chủ đầu tư báo cáo người có thẩm quyền để điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,25 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Thẩm quyền phê duyệt kế hoạch tổng thể lựa chọn nhà thầu thuộc chủ thể nào?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư (trường hợp xác định được chủ đầu tư)",
      " Người đứng đầu cơ quan được giao chuẩn bị dự án",
      " Bên mời thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp thuê đơn vị tư vấn lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu; đánh giá hồ sơ quan tâm, hồ sơ dự sơ tuyển, hồ sơ dự thầu, hồ sơ đề xuất, tổ chuyên gia được thành lập bởi?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Bên mời thầu",
      " Đơn vị tư vấn được chủ đầu tư lựa chọn"
    ],
    "correct": "D"
  },
  {
    "question": "Nhiệm vụ nào sau đây không thuộc trách nhiệm của người có thẩm quyền?",
    "options": [
      " Phê duyệt kế hoạch lựa chọn nhà thầu",
      " Giải quyết kiến nghị và xử lý các vi phạm pháp luật về đấu thầu",
      " Quyết định việc hủy thầu khi thay đổi mục tiêu đầu tư trong quyết định đầu tư",
      " Quyết định việc hủy thầu, đình chỉ cuộc đấu thầu, không công nhận kết quả lựa chọn nhà thầu khi phát hiện có hành vi vi phạm pháp luật về đấu thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp nào sau đây việc phê duyệt kế hoạch lựa chọn nhà thầu thuộc trách nhiệm của chủ đầu tư?",
    "options": [
      " Chủ đầu tư không có trách nhiệm phê duyệt kế hoạch lựa chọn nhà thầu",
      " Chủ đầu tư có trách nhiệm phê duyệt kế hoạch lựa chọn nhà thầu, trừ trường hợp chưa xác định được chủ đầu tư theo quy định của pháp luật",
      " Trường hợp gói thầu được thực hiện trước khi có quyết định phê duyệt dự án và chưa xác định được chủ đầu tư",
      " Chủ đầu tư chỉ được phê duyệt kế hoạch lựa chọn nhà thầu trong trường hợp được người có thẩm quyền ủy quyền"
    ],
    "correct": "B"
  },
  {
    "question": "Việc chấp thuận hoặc không chấp thuận việc điều chuyển khối lượng, phạm vi công việc của nhà thầu phụ cho tổ chức, đơn vị khác khi cần đáp ứng yêu cầu về tiến độ, chất lượng gói thầu do nhà thầu đề xuất thuộc trách nhiệm của ai?",
    "options": [
      " Tổ chuyên gia",
      " Chủ đầu tư",
      " Người có thẩm quyền",
      " Tổ thẩm định"
    ],
    "correct": "B"
  },
  {
    "question": "Nội dung nào không thuộc nội dung quản lý nhà nước đối với hoạt động đấu thầu?",
    "options": [
      " Quản lý hệ thống thông tin và cơ sở dữ liệu về đấu thầu trên phạm vi cả nước.",
      " Lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu.",
      " Đào tạo, bồi dưỡng kiến thức, nghiệp vụ chuyên môn về đấu thầu.",
      " Hợp tác quốc tế về đấu thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Theo quy định pháp luật về đấu thầu, kiểm tra hoạt động đấu thầu được tiến hành theo hình thức nào?",
    "options": [
      " Kiểm tra trực tiếp",
      " Báo cáo bằng văn bản",
      " Kết hợp giữa kiểm tra trực tiếp và báo cáo bằng văn bản",
      " Kiểm tra định kỳ hoặc đột xuất"
    ],
    "correct": "D"
  },
  {
    "question": "Thời hiệu áp dụng biện pháp cấm tham gia hoạt động đấu thầu là bao lâu?",
    "options": [
      " 10 năm tính từ ngày xảy ra hành vi vi phạm",
      " 10 năm tính từ ngày phát hiện ra hành vi vi phạm",
      " 05 năm tính từ ngày phát hiện ra hành vi vi phạm",
      " 05 năm tính từ ngày xảy ra hành vi vi phạm"
    ],
    "correct": "A"
  },
  {
    "question": "Chủ thể nào không có quyền cấm tham gia hoạt động đấu thầu?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Bộ trưởng, Thủ trưởng cơ quan ngang Bộ, cơ quan thuộc Chính phủ, cơ quan khác ở Trung ương",
      " Chủ tịch Ủy ban nhân dân cấp tỉnh"
    ],
    "correct": "B"
  },
  {
    "question": "Người có thẩm quyền ban hành quyết định cấm tham gia hoạt động đấu thầu với thời gian cấm bao lâu đối với trường hợp tổ chức, cá nhân có từ 02 hành vi vi phạm trở lên thuộc cùng phạm vi quản lý của người có thẩm quyền và các hành vi này chưa bị cấm tham gia hoạt động đấu thầu?",
    "options": [
      " Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối thiểu trên 05 năm",
      " Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 03 năm",
      " Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 05 năm",
      " Bằng thời gian cấm của hành vi vi phạm có thời gian bị cấm cao nhất"
    ],
    "correct": "C"
  },
  {
    "question": "Hành vi gian lận trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    "options": [
      " Từ 06 tháng đến 01 năm",
      " 02 năm",
      " Từ 01 năm đến 02 năm",
      " Từ 03 năm đến 05 năm"
    ],
    "correct": "D"
  },
  {
    "question": "Hành vi cản trở trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    "options": [
      " 06 tháng",
      " Từ 06 tháng đến dưới 1 năm",
      " Từ 01 năm đến 03 năm",
      " 05 năm"
    ],
    "correct": "C"
  },
  {
    "question": "Thành viên A trong nhà thầu liên danh A-B thực hiện hành vi \"làm giả hoặc làm sai lệch thông tin, hồ sơ, tài liệu trong đấu thầu\" thì việc cấm tham gia hoạt động đấu thầu được xử lý như thế nào?",
    "options": [
      " Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với thành viên A",
      " Cấm tham gia hoạt động đấu thầu từ 01 năm đến dưới 03 năm đối với thành viên A",
      " Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
      " Cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm đối với tất cả thành viên trong nhà thầu liên danh A-B"
    ],
    "correct": "A"
  },
  {
    "question": "Đình chỉ cuộc thầu được thực hiện trong thời gian nào?",
    "options": [
      " Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      " Trong quá trình tổ chức lựa chọn nhà thầu cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu",
      " Sau khi phê duyệt kết quả lựa chọn nhà thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      " Trong quá trình thực hiện hợp đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Biện pháp nào sau đây được thực hiện trong quá trình thực hiện hợp đồng?",
    "options": [
      " Hủy thầu",
      " Đình chỉ cuộc thầu",
      " Không công nhận kết quả lựa chọn nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Nhà thầu tư vấn giám sát đồng thời thực hiện tư vấn kiểm định đối với gói thầu do nhà thầu đó giám sát thì nhà thầu đó sẽ bị xử lý như thế nào?",
    "options": [
      " Bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm và khi tham dự thầu phải thực hiện biện pháp bảo đảm dự thầu với giá trị gấp 03 lần giá trị yêu cầu trong thời hạn 02 năm",
      " Khi tham dự thầu phải thực hiện biện pháp bảo đảm dự thầu với giá trị gấp 03 lần giá trị yêu cầu trong thời hạn 02 năm",
      " Bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm",
      " Không bị xử lý vi phạm"
    ],
    "correct": "C"
  },
  {
    "question": "Tham gia lập, đồng thời tham gia thẩm định hồ sơ mời thầu đối với cùng một gói thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
    "options": [
      " 02 năm",
      " Từ trên 02 năm đến 03 năm",
      " Từ trên 01 năm đến 02 năm",
      " Từ 06 tháng đến 01 năm"
    ],
    "correct": "D"
  },
  {
    "question": "Nhà thầu liên danh A-B gồm 2 thành viên là nhà thầu A và nhà thầu B. Nhà thầu A làm giả thông tin, hồ sơ, tài liệu về hợp đồng tương tự của mình để tham dự thầu sẽ bị xử lý như thế nào?",
    "options": [
      " Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm",
      " Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm",
      " Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm",
      " Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm"
    ],
    "correct": "A"
  },
  {
    "question": "Nhà thầu liên danh A-B gồm 2 thành viên là nhà thầu A và nhà thầu B. Nhà thầu A dàn xếp, thỏa thuận với các bên rút hồ sơ dự thầu để liên danh A-B trúng thầu sẽ bị xử lý như thế nào?",
    "options": [
      " Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm",
      " Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm",
      " Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm",
      " Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp nhà thầu bị đánh giá về uy tín khi thực hiện hành vi: được lựa chọn trúng thầu nhưng không tiến hành hoặc từ chối tiến hành hoàn thiện hợp đồng hoặc không ký kết hợp đồng thì khi tham gia gói thầu khác, nhà thầu sẽ bị bất lợi như thế nào?",
    "options": [
      " Đối với gói thầu hàng hóa, xây lắp, phi tư vấn, hỗn hợp, nhà thầu bị đánh giá về uy tín phải nộp gấp 3 lần bảo đảm dự thầu trong vòng 03 năm kể từ lần cuối cùng thực hiện hành vi",
      " Đối với gói thầu tư vấn, thông tin uy tín này sẽ được sử dụng để đánh giá về kỹ thuật",
      " Bị đưa vào xem xét, đánh giá về kỹ thuật trong quá trình lựa chọn nhà thầu đối với gói thầu xây lắp, phi tư vấn, hàng hóa, hỗn hợp",
      " Đáp án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trong gói thầu dịch vụ tư vấn, thông tin về uy tín của nhà thầu được sử dụng để?",
    "options": [
      " Đánh giá về năng lực, kinh nghiệm",
      " Đánh giá tư cách hợp lệ của nhà thầu",
      " Đánh giá về kỹ thuật",
      " Loại nhà thầu đã bị đánh giá về uy tín"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với việc giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
    "options": [
      " Chủ đầu tư, người có thẩm quyền",
      " Chủ đầu tư, Hội đồng giải quyết kiến nghị",
      " Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
      " Chủ đầu tư, tổ chuyên gia"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với việc giải quyết kiến nghị về kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
    "options": [
      " Chủ đầu tư, người có thẩm quyền",
      " Chủ đầu tư, Hội đồng giải quyết kiến nghị",
      " Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
      " Chủ đầu tư, Hội đồng tư vấn giải quyết kiến nghị"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp đang trong quá trình giải quyết kiến nghị mà nhà thầu gửi đơn khiếu nại thì việc giải quyết kiến nghị được xử lý thế nào?",
    "options": [
      " Tiếp tục giải quyết kiến nghị",
      " Chấm dứt ngay việc giải quyết kiến nghị",
      " Tạm dừng việc giải quyết kiến nghị đến khi có kết quả giải quyết khiếu nại",
      " Tất cả phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Chi phí giải quyết kiến nghị được nhà thầu nộp cho chủ thể nào sau đây?",
    "options": [
      " Chủ tịch Hội đồng tư vấn giải quyết kiến nghị",
      " Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị",
      " Chủ đầu tư",
      " Người có thẩm quyền"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp nào sau đây nhà thầu không được hoàn trả chi phí giải quyết kiến nghị?",
    "options": [
      " Kiến nghị của nhà thầu được kết luận là đúng",
      " Một hoặc các nội dung kiến nghị của nhà thầu được kết luận là không đúng",
      " Nhà thầu rút đơn kiến nghị trong quá trình giải quyết kiến nghị",
      " Phương án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với kiến nghị về kết quả lựa chọn nhà thầu, Hội đồng giải quyết kiến nghị phải có văn bản giải quyết kiến nghị trong thời hạn bao nhiêu ngày kể từ ngày Hội đồng được thành lập?",
    "options": [
      " 25 ngày",
      " 30 ngày",
      " 35 ngày",
      " 20 ngày"
    ],
    "correct": "B"
  },
  {
    "question": "Phương án nào sau đây là đúng trong việc giải quyết kiến nghị đối với gói thầu sử dụng vốn sản xuất kinh doanh của doanh nghiệp nhà nước?",
    "options": [
      " Hội đồng giải quyết kiến nghị do Sở Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
      " Hội đồng giải quyết kiến nghị do Bộ trưởng Bộ Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
      " Người đứng đầu doanh nghiệp nhà nước tự ban hành điều kiện, quy trình về giải quyết kiến nghị trong đơn vị mình",
      " Tất cả phương án A, B, C đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến người có thẩm quyền và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Bộ phận thường trực",
      " Hội đồng giải quyết kiến nghị"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với kiến nghị về kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến bộ phận thường trực giúp việc Hội đồng giải quyết kiến nghị và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Bộ phận thường trực",
      " Hội đồng giải quyết kiến nghị"
    ],
    "correct": "D"
  },
  {
    "question": "Đơn vị sự nghiệp công lập (tự chủ chi thường xuyên và chi đầu tư) thuộc tỉnh B tổ chức đấu thầu cho dự án sử dụng vốn ngân sách nhà nước thì Giám đốc Sở Tài chính Tỉnh B có trách nhiệm thành lập Hội đồng giải quyết kiến nghị cho gói thầu có kiến nghị tại Dự án này hay không?",
    "options": [
      " Có trách nhiệm thành lập",
      " Không có trách nhiệm thành lập",
      " Thành lập khi chủ tịch UBND tỉnh yêu cầu",
      " Thành lập khi Giám đốc doanh nghiệp A đề nghị"
    ],
    "correct": "A"
  },
  {
    "question": "Hội đồng giải quyết kiến nghị có quyền thực hiện việc nào sau đây?",
    "options": [
      " Hủy thầu",
      " Yêu cầu chủ đầu tư tạm dừng ký kết hợp đồng",
      " Yêu cầu nhà thầu, chủ đầu tư và các cơ quan liên quan cung cấp thông tin của gói thầu, dự án và các thông tin liên quan khác để thực hiện nhiệm vụ",
      " Không công nhận kết quả lựa chọn nhà thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với kiến nghị về quá trình tổ chức lựa chọn nhà thầu (không phải kiến nghị về nội dung hồ sơ mời thầu), đơn kiến nghị phải là của chủ thể nào?",
    "options": [
      " Cá nhân quan tâm đến gói thầu",
      " Nhà thầu tham dự thầu",
      " Cơ quan, tổ chức quan tâm đến gói thầu",
      " Phương án B và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Các tài liệu, thông tin nào sau đây trong việc giải quyết kiến nghị được công khai trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Nội dung kiến nghị kết quả lựa chọn nhà thầu",
      " Văn bản giải quyết kiến nghị của chủ đầu tư",
      " Văn bản giải quyết kiến nghị của người có thẩm quyền",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Nhà thầu có trách nhiệm nộp chi phí giải quyết kiến nghị trong thời hạn bao lâu kể từ ngày nhận được thông báo của bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị?",
    "options": [
      " 03 ngày làm việc",
      " 02 ngày làm việc",
      " 04 ngày làm việc",
      " 05 ngày làm việc"
    ],
    "correct": "B"
  },
  {
    "question": "Trung tâm X là đơn vị sự nghiệp công lập tự chủ chi thường xuyên thuộc tỉnh A tổ chức lựa chọn nhà thầu đối với gói thầu mua sắm hàng hóa sử dụng nguồn thu hợp pháp (không sử dụng ngân sách nhà nước), trường hợp nhà thầu có kiến nghị về hồ sơ mời thầu gửi cả người có thẩm quyền và chủ đầu tư của gói thầu thì việc giải quyết kiến nghị được thực hiện theo quy trình nào?",
    "options": [
      " Chủ đầu tư thực hiện giải quyết kiến nghị theo quy trình giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu theo quy định của pháp luật về đấu thầu",
      " Người có thẩm quyền giải quyết kiến nghị theo quy trình giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu theo quy định của pháp luật về đấu thầu",
      " Thực hiện theo quy trình về giải quyết kiến nghị do người đứng đầu Trung tâm X ban hành trong đơn vị mình",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Ông A là người đại diện hợp pháp của nhà thầu B ký đơn kiến nghị về kết quả lựa chọn nhà thầu. Trong trường hợp này, anh C là con đẻ của ông A có được tham gia là thành viên Hội đồng giải quyết kiến nghị hay không?",
    "options": [
      " Không được tham gia",
      " Được tham gia nếu đủ năng lực, kinh nghiệm",
      " Được tham gia khi Chủ tịch Hội đồng giải quyết kiến nghị chấp thuận",
      " Được tham gia khi người có thẩm quyền chấp thuận"
    ],
    "correct": "A"
  },
  {
    "question": "Đơn vị nào có trách nhiệm tiếp nhận và quản lý chi phí do nhà thầu có kiến nghị nộp?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị",
      " Tổ chuyên gia"
    ],
    "correct": "C"
  },
  {
    "question": "Gói thầu mua thuốc áp dụng phương thức một giai đoạn hai túi hồ sơ có giá gói thầu 100 tỷ đồng. Trong quá trình tham dự thầu, nhà thầu X không đạt về kỹ thuật có kiến nghị về kết quả lựa chọn nhà thầu của gói thầu gửi Hội đồng giải quyết kiến nghị (trong đơn kiến nghị nhà thầu nêu giá dự thầu của mình là 90 tỷ đồng). Chi phí giải quyết kiến nghị nhà thầu X phải nộp là?",
    "options": [
      " Nhà thầu X phải nộp 25 triệu đồng",
      " Nhà thầu X phải nộp 22,5 triệu đồng",
      " Nhà thầu X phải nộp 20 triệu đồng",
      " Nhà thầu X phải nộp 15 triệu đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp hồ sơ mời thầu cho phép nhà thầu đề xuất biện pháp thi công khác với biện pháp thi công nêu trong hồ sơ mời thầu thì phần sai khác giữa khối lượng công việc theo biện pháp thi công nêu trong hồ sơ mời thầu và khối lượng công việc theo biện pháp thi công do nhà thầu đề xuất được xem xét thế nào?",
    "options": [
      " Bị hiệu chỉnh sai lệch, phần sai khác được tính là sai lệch thừa",
      " Không bị hiệu chỉnh sai lệch, phần sai khác không được tính là sai lệch thừa",
      " Bị hiệu chỉnh sai lệch, phần sai khác được tính là sai lệch thiếu",
      " Không bị hiệu chỉnh sai lệch, phần sai khác không bị tính là sai lệch thiếu"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp hồ sơ dự thầu có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá (nếu có) thấp khác thường thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng tối đa là bao nhiêu để đề phòng rủi ro?",
    "options": [
      " 30% giá hợp đồng",
      " 35% giá hợp đồng",
      " 40% giá hợp đồng",
      " 45% giá hợp đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu chia phần, chủ đầu tư có thể phê duyệt kết quả lựa chọn nhà thầu cho từng phần hay không?",
    "options": [
      " Không thể",
      " Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá gói thầu",
      " Có thể nhưng phải bảo đảm tỷ lệ tiết kiệm tối thiểu 5%",
      " Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá của phần đó trong giá gói thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu chia phần, trường hợp một phần của gói thầu không có nhà thầu tham dự thầu thì chủ đầu tư xử lý thế nào?",
    "options": [
      " Tách phần đó ra thành gói thầu riêng biệt để tổ chức lựa chọn nhà thầu theo quy định",
      " Hủy thầu",
      " Đàm phán với nhà thầu trúng thầu của phần khác để thực hiện",
      " Phương án B và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Thẩm quyền xử lý tình huống phức tạp trong đấu thầu?",
    "options": [
      " Chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền",
      " Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của Tổ chuyên gia",
      " Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư",
      " Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư và Tổ chuyên gia"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp một hoặc một số thành viên liên danh vi phạm hợp đồng, không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu thì việc đánh giá uy tín của nhà thầu trong việc thực hiện hợp đồng được xử lý như nào?",
    "options": [
      " Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      " Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      " Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
      " Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp phải chấm dứt hợp đồng với nhà thầu vi phạm hợp đồng để thay thế nhà thầu mới thì phần công việc chưa thực hiện được áp dụng hình thức chỉ định thầu cho nhà thầu khác với giá trị được tính như nào?",
    "options": [
      " Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
      " Bằng giá trị ghi trong hợp đồng được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
      " Bằng giá trị của phần công việc còn lại được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu",
      " Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện trước đó theo dự toán được duyệt"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với nhà thầu liên danh, trường hợp trong quá trình thực hiện hợp đồng cần đẩy nhanh tiến độ thực hiện so với hợp đồng đã ký (cần sửa đổi hợp đồng) thì cần thực hiện như thế nào?",
    "options": [
      " Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và không phải thông báo cho chủ đầu tư",
      " Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và thông báo cho chủ đầu tư",
      " Phải được người có thẩm quyền cho phép chủ đầu tư và nhà thầu thỏa thuận, điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
      " Chủ đầu tư và nhà thầu được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nhà thầu có nhân sự (ký kết hợp đồng lao động với nhà thầu tại thời điểm nhân sự thực hiện hành vi vi phạm) bị cơ quan điều tra kết luận có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng theo quy định pháp luật về hình sự nhằm mục đích cho nhà thầu trúng thầu nhưng nhân sự của nhà thầu chưa bị Tòa án kết án hoặc nhà thầu chưa bị người có thẩm quyền ra quyết định cấm tham gia hoạt động đấu thầu thì tại thời điểm này nhà thầu có được tham dự thầu hay không?",
    "options": [
      " Nhà thầu không được tham dự thầu",
      " Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu sẽ được mở nhưng không được xem xét, đánh giá",
      " Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu không được mở thầu và trả lại theo nguyên trạng",
      " Nhà thầu vẫn được tiếp tục tham dự thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nào là một trong những điều kiện để chủ đầu tư chấp thuận đề xuất của nhà thầu trong quá trình thực hiện hợp đồng về việc thay đổi các hàng hóa có phiên bản sản xuất, năm sản xuất mới hơn so với hàng hóa ghi trong hợp đồng?",
    "options": [
      " Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng bắt buộc phải cùng hãng sản xuất và xuất xứ",
      " Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng hãng sản xuất nhưng không bắt buộc cùng xuất xứ",
      " Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng xuất xứ nhưng không bắt buộc cùng hãng sản xuất",
      " Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng không bắt buộc cùng hãng sản xuất và cùng xuất xứ"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp gói thầu có tính chất đặc thù và áp dụng hình thức chỉ định thầu hoặc lựa chọn nhà thầu trong trường hợp đặc biệt, nhà thầu nước ngoài có yêu cầu ràng buộc chỉ ký hợp đồng khi không phải đăng ký trên Hệ thống mạng đấu thầu quốc gia thì chủ đầu tư xử lý như thế nào?",
    "options": [
      " Không cần yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      " Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
      " Nhà thầu không được chấp nhận và bị loại",
      " Hủy thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với trường hợp hủy thầu thì phải thực hiện giải pháp nào sau đây?",
    "options": [
      " Phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
      " Phải điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu",
      " Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
      " Tất cả các đáp án trên đều không đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Hủy thầu được thực hiện trong thời gian nào?",
    "options": [
      " Từ ngày có thời điểm đóng thầu đến khi có kết quả lựa chọn nhà thầu",
      " Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      " Từ ngày có thời điểm đóng thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
      " Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trường hợp trong quá trình đánh giá E-HSDT mà chưa có kết quả lựa chọn nhà thầu, nhà thầu có tên trong biên bản mở thầu bị khóa tài khoản theo quy định của pháp luật về đấu thầu thì chủ đầu tư xử lý như thế nào?",
    "options": [
      " Yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản làm cơ sở xem xét, đánh giá E-HSDT của nhà thầu",
      " Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      " Không tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
      " Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu xây lắp, dịch vụ phi tư vấn, dịch vụ tư vấn áp dụng đấu thầu trước quy định tại Điều 42 của Luật Đấu thầu, trường hợp dự án được phê duyệt có các nội dung dẫn đến tăng giá gói thầu (hoặc tăng dự toán nếu dự toán được phê duyệt sau khi phê duyệt kế hoạch lựa chọn nhà thầu) từ 30% trở lên hoặc thay đổi tiêu chuẩn đánh giá quan trọng về kỹ thuật hoặc thay đổi cấp công trình quy định trong hồ sơ mời thầu đã phát hành thì chủ đầu tư xử lý như thế nào?",
    "options": [
      " Tiếp tục đánh giá hồ sơ dự thầu trong trường hợp đã mở thầu",
      " Được sửa đổi và phát hành bổ sung hồ sơ mời thầu trong trường hợp chưa mở thầu",
      " Được sửa đổi, bổ sung khối lượng công việc, hoàn thiện để ký kết hợp đồng với nhà thầu",
      " Hủy thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp nhà thầu trúng thầu không tiến hành hoàn thiện, ký kết hợp đồng hoặc tại thời điểm ký kết hợp đồng, nhà thầu trúng thầu không đáp ứng yêu cầu về năng lực kỹ thuật, tài chính quy định tại khoản 2 Điều 66 của Luật Đấu thầu thì chủ đầu tư xử lý như thế nào trong trường hợp này?",
    "options": [
      " Hủy quyết định phê duyệt kết quả lựa chọn nhà thầu trúng thầu",
      " Hủy thầu",
      " Không công nhận kết quả lựa chọn nhà thầu",
      " Đình chỉ cuộc thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp nào sau đây, chủ đầu tư và nhà thầu liên danh được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh?",
    "options": [
      " Khi một thành viên liên danh không muốn tiếp tục thực hiện phần việc đã cam kết",
      " Khi chủ đầu tư thấy một thành viên trong liên danh thực hiện tốt nên muốn điều chuyển toàn bộ phần việc cho thành viên liên danh đó",
      " Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ",
      " Khi một thành viên liên danh đề nghị chuyển nhượng phần việc để tiết kiệm chi phí"
    ],
    "correct": "C"
  },
  {
    "question": "Gói thầu EC có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá bằng 85% giá gói thầu thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng ở mức 15% hay không?",
    "options": [
      " Không được quy định",
      " Có thể quy định nhưng phải được sự đồng ý của nhà thầu",
      " Chủ đầu tư quyết định để ngừa rủi ro cho quá trình thực hiện",
      " Có thể quy định nhưng phải được người có thẩm quyền chấp thuận"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu hỗn hợp có yêu cầu đặc thù về kỹ thuật chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu áp dụng bước thương thảo hợp đồng, trường hợp nhà thầu xếp hạng thứ nhất (danh sách xếp hạng có 03 nhà thầu) không tiến hành thương thảo, không ký biên bản thương thảo, thương thảo không thành công thì chủ đầu tư thực hiện bước tiếp theo như thế nào?",
    "options": [
      " Mời nhà thầu xếp hạng tiếp theo vào thương thảo hợp đồng",
      " Hủy thầu",
      " Cho phép các nhà thầu còn lại chào lại giá dự thầu",
      " Mời nhà thầu xếp hạng tiếp theo vào hoàn thiện hợp đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu xây lắp áp dụng đấu thầu quốc tế, trường hợp nhà thầu xếp thứ nhất có hồ sơ dự thầu không cân bằng (có đơn giá chào cao hơn đáng kể so với đơn giá tương ứng trong dự toán gói thầu ở các hạng mục công việc có các yêu cầu kỹ thuật đơn giản, dễ thực hiện, hạng mục công việc có khả năng phát sinh khối lượng ngoài khối lượng trong bảng giá dự thầu và có đơn giá chào thấp hơn đáng kể so với đơn giá tương ứng trong dự toán gói thầu ở các hạng mục công việc phức tạp, khó thực hiện) thì chủ đầu tư có thể xử lý thế nào?",
    "options": [
      " Yêu cầu nhà thầu làm rõ bằng văn bản về các chi phí cấu thành giá dự thầu",
      " Có thể quy định giá trị bảo đảm thực hiện hợp đồng lớn hơn 10% nhưng không quá 30% giá hợp đồng để đề phòng rủi ro",
      " Mời nhà thầu chào lại giá",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp xí nghiệp X được tách ra khỏi pháp nhân theo quy định của pháp luật về dân sự thì nhà thầu tiếp nhận xí nghiệp X có được kế thừa năng lực, kinh nghiệm của xí nghiệp hay không?",
    "options": [
      " Không được kế thừa năng lực, kinh nghiệm của xí nghiệp X",
      " Được kế thừa năng lực, kinh nghiệm của xí nghiệp X",
      " Chỉ được kế thừa về kinh nghiệm của xí nghiệp X",
      " Chỉ được kế thừa về năng lực của xí nghiệp X"
    ],
    "correct": "B"
  },
  {
    "question": "Trong quá trình thực hiện hợp đồng của nhà thầu liên danh A-B, nhà thầu B không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu. Trong trường hợp này, bảo đảm thực hiện hợp đồng của nhà thầu xử lý như thế nào?",
    "options": [
      " Không tịch thu giá trị bảo đảm thực hiện hợp đồng của nhà thầu A-B",
      " Tịch thu giá trị bảo đảm thực hiện hợp đồng của tất cả thành viên liên danh trong trường hợp phần công việc còn lại của các thành viên liên danh vi phạm hợp đồng được tách thành gói thầu riêng để lựa chọn nhà thầu",
      " Chỉ tịch thu giá trị bảo đảm thực hiện hợp đồng của nhà thầu B nếu nhà thầu A có đủ năng lực, kinh nghiệm đảm nhận phần công việc còn lại của nhà thầu B",
      " Phương án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu mua sắm thiết bị y tế, tổ chức đấu thầu rộng rãi qua mạng gói thầu mua sắm thiết bị y tế, trường hợp nhà thầu dự thầu không đề xuất cụ thể ký mã hiệu, nhãn hiệu, xuất xứ, hãng sản xuất thì xử lý như thế nào?",
    "options": [
      " Chủ đầu tư yêu cầu nhà thầu bổ sung, làm rõ E-HSDT",
      " Chủ đầu tư tiếp tục đánh giá E-HSDT, trường hợp nhà thầu xếp thứ nhất thì yêu cầu nhà thầu bổ sung thông tin để hoàn thiện hợp đồng",
      " E-HSDT của nhà thầu bị đánh giá không đáp ứng và bị loại",
      " Xin ý kiến người có thẩm quyền để xử lý tình huống trong đấu thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Nhận định nào sau đây đúng về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      " Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      " Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
      " Cả 3 phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Tài khoản nghiệp vụ trên Hệ thống mạng đấu thầu quốc gia là gì?",
    "options": [
      "T ài khoản do người sử dụng đăng ký và được phê duyệt trên Hệ thống mạng đấu thầu quốc gia",
      " Tài khoản do Trung tâm Đấu thầu qua mạng quốc gia cấp phép theo quy định",
      " Tài khoản do Tài khoản tham gia hệ thống tạo ra",
      "P hương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Nhà thầu có trách nhiệm kê khai thông tin nào trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Thông tin về uy tín của nhà thầu trong việc tham dự thầu",
      " Thông tin về vi phạm của nhà thầu",
      " Thông tin về năng lực, kinh nghiệm của nhà thầu",
      " Cả 3 phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Ai chịu trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Bên mời thầu",
      " Tổ chuyên gia",
      " Tư vấn đấu thầu",
      " Chủ đầu tư"
    ],
    "correct": "D"
  },
  {
    "question": "Trong đấu thầu qua mạng, nhà thầu tư vấn đấu thầu bị khoá tài khoản trong vòng 06 tháng khi thực hiện hành vi nào sau đây?",
    "options": [
      " Tham gia vào quá trình lập và đánh giá E-HSMT",
      " Tham gia vào quá trình thẩm định hồ sơ mời thầu và kết quả lựa chọn nhà thầu",
      " Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
      " Đăng tải thông tin về năng lực, kinh nghiệm của mình trên Hệ thống mạng đấu thầu quốc gia"
    ],
    "correct": "C"
  },
  {
    "question": "Chủ đầu tư có trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống đấu thầu qua mạng quốc gia chậm nhất là?",
    "options": [
      " 05 ngày làm việc kể từ ngày ký kết hợp đồng",
      " 05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
      " 05 ngày kể từ ngày hợp đồng có hiệu lực",
      " 05 ngày làm việc kể từ ngày nhà thầu nộp bảo đảm thực hiện hợp đồng"
    ],
    "correct": "B"
  },
  {
    "question": "Danh sách nhà thầu có hành vi vi phạm và bị đánh giá về uy tín được đăng tải trên Hệ thống mạng đấu thầu quốc gia như thế nào?",
    "options": [
      " Tổ chuyên gia đăng tải trong thời hạn 03 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      " Bên mời thầu đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      " Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
      " Người có thẩm quyền đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm"
    ],
    "correct": "C"
  },
  {
    "question": "Chủ thể nào sau đây được gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Tổ chuyên gia",
      " Tư vấn đấu thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Chọn phương án đúng về thời gian áp dụng mua sắm trực tuyến đối với các hạng mục trong danh mục hàng hóa, dịch vụ mua sắm tập trung?",
    "options": [
      " Thời gian áp dụng là thời gian thực hiện hợp đồng trong trường hợp không ký thỏa thuận khung nhưng không quá 24 tháng kể từ ngày hợp đồng có hiệu lực hoặc thời gian có hiệu lực của thỏa thuận khung",
      " Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong trường hợp hợp đồng, thỏa thuận khung chưa được công khai",
      " Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Công việc nào sau đây phải thực hiện trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Lập E-HSMT",
      " Trình phê duyệt E-HSMT, phê duyệt E-HSMT",
      " Phê duyệt kết quả lựa chọn nhà thầu",
      " Tất cả các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, việc trả lời yêu cầu làm rõ E-HSMT được thực hiện theo phương án nào?",
    "options": [
      " Do tổ chuyên gia thực hiện bằng văn bản",
      " Do tổ chuyên gia thực hiện trên Hệ thống mạng đấu thầu quốc gia",
      " Do tư vấn đấu thầu thực hiện bằng tài khoản của đơn vị tư vấn trên Hệ thống mạng đấu thầu quốc gia",
      " Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu đấu thầu qua mạng, trường hợp sửa đổi E-HSMT sau khi phát hành, chủ đầu tư phải đăng tải tài liệu nào sau đây trên Hệ thống?",
    "options": [
      " Quyết định sửa đổi kèm theo những nội dung sửa đổi E-HSMT",
      " E-HSMT đã được sửa đổi",
      " Báo cáo thẩm định E-HSMT sửa đổi",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Nhà thầu không phải đính kèm thư bảo lãnh (hoặc giấy chứng nhận bảo hiểm bảo lãnh) mà chỉ phải cam kết trong đơn dự thầu đối với gói thầu xây lắp khi nào?",
    "options": [
      " E-HSMT yêu cầu giá trị bảo đảm dự thầu là 40 triệu đồng",
      " E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
      " E-HSMT yêu cầu giá trị bảo đảm dự thầu là 60 triệu đồng",
      " E-HSMT yêu cầu giá trị bảo đảm dự thầu là 100 triệu đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh trong đấu thầu qua mạng được nộp như thế nào?",
    "options": [
      " Gửi qua email đến Tổ trưởng Tổ chuyên gia",
      " Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
      " Gửi bản gốc đến địa chỉ bên mời thầu theo quy định trong E-HSMT",
      " Gửi cho Đơn vị tư vấn đấu thầu đánh giá E-HSDT"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu qua mạng, quy định nào về việc mở thầu và công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    "options": [
      " Hệ thống tự động mở thầu và công khai biên bản mở thầu trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      " Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 04 giờ kể từ thời điểm đóng thầu.",
      " Tổ chuyên gia phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
      " Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu."
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trong quá trình đánh giá EHSDT, Chủ đầu tư nhận thấy nhà thầu có tên trong biên bản mở thầu đang bị khóa tài khoản theo quy định của pháp luật về đấu thầu, E-HSDT của nhà thầu bị đánh giá như thế nào?",
    "options": [
      " E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá mà không cần phải mở khóa tài khoản trước khi ký hợp đồng",
      " E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá nhưng chỉ được đề nghị trúng thầu khi thực hiện mở khóa tài khoản trước khi ký hợp đồng",
      " E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
      " Nhà thầu bị cấm tham gia hoạt động đấu thầu do có hành vi gian lận"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, sau thời điểm đóng thầu, nhận định nào sau đây là đúng?",
    "options": [
      " Nhà thầu có thể thay đổi nội dung E-HSDT nếu phát hiện sai sót",
      " Nhà thầu có thể tự làm rõ E-HSDT trên Hệ thống",
      " Nhà thầu không rút được E-HSDT trên Hệ thống",
      " Chủ đầu tư không được phép mở thầu khi chỉ có 01 nhà thầu tham dự"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp Hệ thống gặp sự cố thì trường hợp nào được Hệ thống tự động gia hạn thời điểm đóng thầu?",
    "options": [
      " Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      " Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến, thời điểm đăng tải kết quả lựa chọn nhà thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
      " Các gói thầu có thời điểm đóng thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 04 giờ",
      " Các đáp án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, khi tham dự thầu, nhà thầu….?",
    "options": [
      " Chịu trách nhiệm về tính chính xác của các thông tin kê khai trên webform và file tài liệu đính kèm",
      " Chỉ nộp một bộ E-HSDT đối với một E-TBMT",
      " Chỉ được rút, sửa đổi, nộp lại E-HSDT trước thời điểm đóng thầu",
      " Cả 3 đáp án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Khi nào nhà thầu phải nộp lại E-HSDT đã nộp?",
    "options": [
      " Khi Tổ chuyên gia phát hiện E-HSDT bị lỗi kỹ thuật không mở được",
      " Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố phải tự động gia hạn",
      " Khi E-HSMT được sửa đổi",
      " Các phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu tổ chức đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu mà không có nhà thầu nộp E-HSDT thì chủ đầu tư quyết định theo phương án nào sau đây?",
    "options": [
      " Huỷ E-TBMT để mời thầu lại",
      " Chuyển sang hình thức đấu thầu rộng rãi không qua mạng",
      " Cho phép gia hạn thời điểm đóng thầu tối thiểu 05 ngày làm việc đối với gói thầu xây lắp, hỗn hợp có giá gói thầu không quá 20 tỷ đồng, gói thầu mua sắm hàng hoá, dịch vụ phi tư vấn có giá không quá 10 tỷ đồng",
      " Phương án A và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì xử lý như nào?",
    "options": [
      " Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      " Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      " Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      " Các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu qua mạng, việc làm rõ E-HSDT giữa Chủ đầu tư và nhà thầu có EHSDT cần phải làm rõ được thực hiện như thế nào?",
    "options": [
      " Chủ đầu tư được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm, không được làm rõ đối với yêu cầu về kỹ thuật, tài chính",
      " Chủ đầu tư được làm rõ đối với yêu cầu về kỹ thuật, tài chính, không được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm",
      " Chủ đầu tư dành cho nhà thầu tối đa 03 ngày để nhà thầu thực hiện việc làm rõ E-HSDT",
      " Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-HSDT"
    ],
    "correct": "D"
  },
  {
    "question": "File đính kèm nào sau đây của nhà thầu nộp trên Hệ thống mạng đấu thầu quốc gia không được xem xét, đánh giá?",
    "options": [
      " Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows",
      " Các file sử dụng phông chữ thuộc bảng mã Unicode",
      " Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows hoặc phần mềm giải nén Rar hoặc 7Zip",
      " Các file bị nhiễm virus, bị lỗi, hỏng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nội dung nào sau đây do Hệ thống tự động đánh giá?",
    "options": [
      " Bảo đảm dự thầu",
      " Thoả thuận liên danh đối với nhà thầu liên danh",
      " Doanh thu bình quân 3 năm gần nhất của nhà thầu",
      " Các đáp án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nội dung đánh giá kết quả hoạt động tài chính nào sau đây là đúng?",
    "options": [
      " Đối với số liệu về kết quả hoạt động tài chính từ 2021 trở đi, Hệ thống đánh giá căn cứ thông tin được trích xuất hoặc thông tin do nhà thầu cập nhật",
      " Đối với số liệu về kết quả hoạt động tài chính trước năm 2021, hệ thống đánh giá căn cứ thông tin do nhà thầu kê khai",
      " Đối với nhà thầu là hộ kinh doanh, không đánh giá tiêu chí kết quả hoạt động tài chính",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu rộng rãi qua mạng, một số nội dung do Hệ thống mạng đấu thầu quốc gia đánh giá \"không đạt\" thì Tổ chuyên gia không thể sửa đổi kết quả đánh giá từ \"không đạt\" thành \"đạt\". Phương án nào sau đây là đúng?",
    "options": [
      " Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, doanh thu bình quân hằng năm.",
      " Tư cách hợp lệ, bảo đảm dự thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
      " Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
      " Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, lịch sử không hoàn thành hợp đồng do lỗi của nhà thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm"
    ],
    "correct": "D"
  },
  {
    "question": "Quy trình 02 trong đánh giá E-HSDT được áp dụng đối với gói thầu nào sau đây?",
    "options": [
      " Gói thầu mua sắm hàng hóa áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
      " Gói thầu dịch vụ phi tư vấn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá đánh giá” và các nhà thầu, E-HSDT chào ưu đãi như nhau",
      " Gói thầu xây lắp áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
      " Gói thầu máy đặt, máy mượn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT chào ưu đãi như nhau"
    ],
    "correct": "A"
  },
  {
    "question": "Chủ đầu tư yêu cầu gia hạn hiệu lực hồ sơ dự thầu, bảo đảm dự thầu trong trường hợp nào sau đây?",
    "options": [
      " Trước khi hết hạn hiệu lực hồ sơ dự thầu trong trường hợp cần gia hạn để tiếp tục đánh giá hồ sơ dự thầu",
      " Trường hợp nhà thầu xếp hạng tiếp theo được mời vào thương thảo hợp đồng nhưng hồ sơ dự thầu của nhà thầu đó hết hiệu lực thì Chủ đầu tư phải yêu cầu nhà thầu gia hạn hiệu lực của hồ sơ dự thầu, bảo đảm dự thầu trước khi thương thảo hợp đồng",
      " Trước khi phê duyệt kết quả lựa chọn nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Trong quá trình đánh giá, Tổ chuyên gia phát hiện nhà thầu tham dự thầu trên Hệ thống mạng đấu thầu quốc gia đính kèm tệp tin có thiết lập mật khẩu thì xử lý thế nào?",
    "options": [
      " Yêu cầu nhà thầu nộp lại tệp tin không có thiết lập mật khẩu trên Hệ thống mạng đấu thầu quốc gia để xem xét, đánh giá",
      " Yêu cầu nhà thầu cung cấp mật khẩu để xem xét, đánh giá",
      " Tệp tin này không được xem xét, đánh giá",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Theo quy định tại Thông tư số 79/2025/TTBTC, quy định về thời điểm bắt đầu và kết thúc chào giá trực tuyến theo quy trình rút gọn?",
    "options": [
      " Thời điểm bắt đầu và kết thúc phải trong giờ hành chính.",
      " Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
      " Thời điểm bắt đầu và kết thúc không bắt buộc trong giờ hành chính.",
      " Tất cả phương án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu chào giá trực tuyến rút gọn, nhà thầu xác nhận về việc chấp thuận được trao hợp đồng trong thời gian tối đa bao lâu kể từ ngày chủ đầu tư mời nhà thầu xác nhận trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " 03 ngày",
      " 03 ngày làm việc",
      " 05 ngày",
      " 05 ngày làm việc"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu chào giá trực tuyến rút gọn, trường hợp nhà thầu từ chối hoặc không xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia thì nội dung nào sau đây không đúng?",
    "options": [
      " Công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      " Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của chủ đầu tư",
      " Khóa chức năng chào giá trực tuyến trong thời hạn 06 tháng kể từ ngày chủ đầu tư công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
      " Bị đánh giá về uy tín trong việc tham dự thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Chào giá trực tuyến theo quy trình thông thường áp dụng đối với gói thầu nào sau đây?",
    "options": [
      " Dịch vụ phi tư vấn thông dụng, đơn giản",
      " Xây lắp",
      " Dịch vụ tư vấn",
      " Hỗn hợp"
    ],
    "correct": "A"
  },
  {
    "question": "Nhà thầu phải thực hiện xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia đối với các hình thức lựa chọn nhà thầu qua mạng nào?",
    "options": [
      " Đấu thầu rộng rãi, chào hàng cạnh tranh, đấu thầu hạn chế.",
      " Chào giá trực tuyến theo quy trình thông thường",
      " Chào giá trực tuyến theo quy trình rút gọn",
      " Các phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với chào giá trực tuyến rút gọn, kể từ lượt chào giá thứ hai, giá chào của nhà thầu không được thấp hơn giá thấp nhất hiển thị trên Hệ thống mạng đấu thầu quốc gia là bao nhiêu %?",
    "options": [
      " 80%",
      " 85%",
      " 90%",
      " 95%"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với chào giá trực tuyến rút gọn, giá trị bảo đảm dự thầu tối đa là giá trị nào sau đây?",
    "options": [
      " 5% giá gói thầu",
      " 10% giá gói thầu",
      " 1-3% giá gói thầu",
      " Không yêu cầu về bảo đảm dự thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu áp dụng chào giá trực tuyến theo quy trình thông thường, trường hợp nhà thầu được mời tham gia chào giá trực tuyến nhưng nhà thầu từ chối tham gia thì xử lý thế nào?",
    "options": [
      " Đề xuất về tài chính của nhà thầu sẽ bị đánh giá là không đạt",
      " Nhà thầu sẽ bị loại và bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong vòng 06 tháng",
      " Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo hồ sơ dự thầu đã nộp trước thời điểm đóng thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Mua sắm trực tuyến được áp dụng đối với hàng hoá, dịch vụ của gói thầu thuộc dự toán mua sắm với giá gói thầu có hạn mức tối đa là bao nhiêu?",
    "options": [
      " 100 triệu đồng",
      " 300 triệu đồng",
      " 500 triệu đồng",
      " 01 tỷ đồng"
    ],
    "correct": "C"
  },
  {
    "question": "Trong mua sắm tập trung áp dụng đấu thầu rộng rãi, hợp đồng điện tử có thể được ký kết giữa các đối tượng nào?",
    "options": [
      " Đơn vị mua sắm tập trung và các nhà thầu trúng thầu (trong trường hợp không ký thỏa thuận khung)",
      " Đơn vị có nhu cầu mua sắm với các nhà thầu trúng thầu (trong trường hợp đơn vị mua sắm tập trung ký thỏa thuận khung với nhà thầu trúng thầu)",
      " Phương án A và B đều đúng",
      " Phương án A và B đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Mua sắm trực tuyến được áp dụng đối với gói thầu nào sau đây?",
    "options": [
      " Gói thầu mua sắm hàng hóa, dịch vụ thuộc dự toán mua sắm có giá gói thầu không quá 500 triệu đồng; gói thầu mua sắm hàng hóa, dịch vụ thuộc dự án có giá gói thầu không quá 01 tỷ đồng",
      " Gói thầu xây lắp thuộc dự toán mua sắm có giá gói thầu không quá 01 tỷ đồng; gói thầu xây lắp thuộc dự án có giá gói thầu không quá 02 tỷ đồng",
      " Gói thầu mua sắm hàng hóa, cung cấp dịch vụ phi tư vấn thuộc dự án có giá gói thầu không quá 05 tỷ đồng",
      " Phương án B và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu áp dụng hình thức chào giá trực tuyến rút gọn, việc thẩm định kết quả lựa chọn nhà thầu được thực hiện như thế nào?",
    "options": [
      " Chỉ thẩm định nội dung về giá chào của nhà thầu",
      " Bắt buộc thẩm định khi người có thẩm quyền yêu cầu",
      " Không phải thẩm định kết quả lựa chọn nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Khi đánh giá E-HSDT gói thầu xây lắp áp dụng đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì phương án nào sau đây là đúng?",
    "options": [
      " Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
      " Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      " Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
      " Phương án B và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Nhận định nào sau đây về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia là đúng?",
    "options": [
      " Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
      " Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
      " Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
      " Các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, chức năng trả lời làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia được thực hiện bao nhiêu lần đối với mỗi yêu cầu làm rõ?",
    "options": [
      " 01 lần",
      " 02 lần",
      " 03 lần",
      " Không giới hạn số lần"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nhà thầu liên danh nộp bảo đảm dự thầu theo thể thức nào sau đây?",
    "options": [
      " Từng thành viên liên danh có thể sử dụng thể thức bảo lãnh dự thầu khác nhau",
      " Các thành viên liên danh bắt buộc phải sử dụng cùng thể thức bảo lãnh dự thầu điện tử",
      " Các thành viên liên danh phải sử dụng cùng thể thức: bảo lãnh dự thầu điện tử hoặc bảo lãnh dự thầu bằng giấy",
      " Các thành viên liên danh bắt buộc phải sử dụng cùng thể thức bảo lãnh dự thầu bằng giấy"
    ],
    "correct": "C"
  },
  {
    "question": "Nhận định nào sau đây là đúng?",
    "options": [
      " Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của chủ đầu tư, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của chủ đầu tư thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu",
      " Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của bên mời thầu, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của bên mời thầu thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu",
      " Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của tổ chuyên gia, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của tổ chuyên gia thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu",
      " Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của tư vấn đấu thầu, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của tư vấn đấu thầu thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu nào sau đây không phải áp dụng đấu thầu qua mạng trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Gói thầu hỗn hợp theo phương thức 02 giai đoạn",
      " Gói thầu đấu thầu rộng rãi quốc tế",
      " Gói thầu áp dụng hình thức chỉ định thầu, đặt hàng, giao nhiệm vụ, mua sắm trực tiếp, tự thực hiện, đàm phán giá, lựa chọn nhà thầu trong trường hợp đặc biệt, gói thầu có sự tham gia của cộng đồng",
      " Các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Việc hủy E-TBMT có thể được thực hiện tại thời điểm nào?",
    "options": [
      " Được thực hiện tại thời điểm đóng thầu trong trường hợp không có nhà thầu tham dự thầu",
      " Được thực hiện sau thời điểm mở thầu",
      " Được thực hiện trước thời điểm đóng thầu trong trường hợp đã phát hành hồ sơ mời thầu trước ngày 01/7/2025 nhưng đến ngày 4/8/2025 chưa đóng thầu",
      " Phương án A và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Khi chủ đầu tư sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) trên Hệ thống mạng đấu thầu quốc gia, nhận định nào sau đây đúng?",
    "options": [
      " Nhà thầu chịu trách nhiệm theo dõi thông tin trên Hệ thống mạng đấu thầu quốc gia để cập nhật thông tin về việc sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) để làm cơ sở chuẩn bị E-HSDT",
      " Nhà thầu phải tự chịu trách nhiệm và chịu bất lợi trong quá trình tham dự thầu nếu không theo dõi, cập nhật thông tin sửa đổi E-HSMT, thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia trong quá trình tham dự thầu",
      " Hệ thống mạng đấu thầu quốc gia tự động gửi email thông báo về việc sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) cho các nhà thầu quan tâm đến gói thầu",
      " Các phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp E-HSMT không đầy đủ thông tin (thiếu thiết kế, bản vẽ và các tài liệu khác) hoặc thông tin không rõ ràng, gây khó khăn cho nhà thầu trong việc chuẩn bị EHSDT thì chủ đầu tư phải làm gì?",
    "options": [
      " Phải sửa đổi, bổ sung E-HSMT cho phù hợp và tiến hành đăng tải lại E-HSMT",
      " Thực hiện bổ sung, hoàn thiện cho phù hợp và sửa đổi trên Hệ thống",
      " Đính kèm thêm các thành phần còn thiếu của E-HSMT trên Hệ thống",
      " Hủy thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Việc phải ký kết hợp đồng điện tử trên Hệ thống mạng đấu thầu quốc gia bắt buộc áp dụng đối với gói thầu nào sau đây?",
    "options": [
      " Gói thầu áp dụng đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh, chào giá trực tuyến, mua sắm trực tuyến mà việc thanh toán hợp đồng được thực hiện qua Kho bạc nhà nước",
      " Gói thầu áp dụng đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh, chào giá trực tuyến, mua sắm trực tuyến mà việc thanh toán hợp đồng không thực hiện qua Kho bạc nhà nước",
      " Tất cả các gói thầu áp dụng đấu thầu qua mạng",
      " Tất cả các gói thầu áp dụng đấu thầu qua mạng và không qua mạng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, sau khi đánh giá E-HSDT, tổ trưởng tổ chuyên gia phải thực hiện nội dung gì sau đây trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Đính kèm bản scan báo cáo đánh giá E-HSDT (có chữ ký của tất cả thành viên trong tổ chuyên gia)",
      " Đính kèm bản scan báo cáo đánh giá E-HSDT (không cần có chữ ký của tất cả thành viên trong tổ chuyên gia)",
      " Đính kèm bản scan báo cáo đánh giá E-HSDT (chỉ cần chữ ký của tổ trưởng tổ chuyên gia)",
      " Tất cả các phương án đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Gói thầu hàng hóa có giá gói thầu 02 tỷ đồng thực hiện chào giá trực tuyến theo quy trình rút gọn, trường hợp chủ đầu tư đăng tải thông báo mời thầu vào 11h00 ngày Thứ 2 (15/9/2025), thời điểm nào sau đây là thời điểm kết thúc chào giá trực tuyến sớm nhất?",
    "options": [
      " 11h00 ngày Thứ 6 (19/9/2025)",
      " 08h00 ngày Thứ 3 (23/9/2025)",
      " 11h00 ngày Thứ 3 (23/9/2025)",
      " 08h00 ngày Thứ 4 (24/9/2025)"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nhà thầu đính kèm bản scan thư giảm giá khi tham dự thầu trên Hệ thống mạng đấu thầu quốc gia thì việc đánh giá tệp tin đính kèm này được thực hiện theo phương án nào sau đây?",
    "options": [
      " Không được xem xét, đánh giá",
      " Được xem xét, đánh giá căn cứ tệp tin đính kèm",
      " Được làm rõ trong trường hợp có sự sai khác thông tin về giảm giá giữa tệp tin đính kèm này và thông tin kê khai trong đơn dự thầu",
      " Được bổ sung trong trường hợp có sự sai khác thông tin về giảm giá giữa tệp tin đính kèm này và thông tin kê khai trong đơn dự thầu"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa có giá gói thầu 15 tỷ đồng thực hiện đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu không có nhà thầu tham dự thầu, chủ đầu tư quyết định xử lý tình huống theo cách gia hạn thời điểm đóng thầu thì thời gian gia hạn tối thiểu là bao nhiêu ngày?",
    "options": [
      " 10 ngày",
      " 05 ngày làm việc",
      " 05 ngày",
      " 03 ngày làm việc"
    ],
    "correct": "A"
  },
  {
    "question": "Phương thức lựa chọn nhà thầu nào sau đây áp dụng cho đấu thầu qua mạng?",
    "options": [
      " 01 giai đoạn, 01 túi hồ sơ",
      " 02 giai đoạn, 01 túi hồ sơ",
      " 02 giai đoạn, 02 túi hồ sơ",
      " Các phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với dự toán mua sắm, hạn mức áp dụng chào giá trực tuyến theo quy trình thông thường đối với gói thầu mua sắm hàng hóa là?",
    "options": [
      " Có giá gói thầu không quá 500 triệu đồng",
      " Có giá gói thầu không quá 02 tỷ đồng",
      " Có giá gói thầu không quá 05 tỷ đồng",
      " Không có quy định về hạn mức áp dụng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu hàng hóa có giá gói thầu 01 tỷ đồng thực hiện chào giá trực tuyến theo quy trình rút gọn, trường hợp chủ đầu tư đăng tải thông báo mời thầu vào 11h00 ngày Thứ 2 (15/9/2025), thời điểm nào sau đây là thời điểm kết thúc chào giá trực tuyến sớm nhất?",
    "options": [
      " 08h00 ngày thứ 6 (19/9/2025)",
      " 08h00 ngày thứ bẩy (20/9/2025)",
      " 11h00 ngày thứ 6 (19/9/2025)",
      " 08h00 ngày thứ 2 (22/9/2025)"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với đấu thầu qua mạng, thành phần nào sau đây không được coi là một phần của EHSMST, E-HSMT và nhà thầu không phải đáp ứng các yêu cầu này?",
    "options": [
      "B ảng dữ liệu được số hóa dưới dạng webform trên Hệ thống mạng đấu thầu quốc gia",
      " Tiêu chuẩn đánh giá về tính hợp lệ được đính kèm trên Hệ thống mạng đấu thầu quốc gia",
      " Yêu cầu về năng lực, kinh nghiệm được đính kèm trên Hệ thống mạng đấu thầu quốc gia",
      "P hương án B và C đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Yêu cầu nào sau đây là đúng đối với tệp tin (file) đăng tải trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows. Các file sử dụng phông chữ không thuộc bảng mã Unicode",
      " Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows, MacOS hoặc phần mềm giải nén Rar hoặc 7Zip. Trường hợp sử dụng file nén, các file sau khi giải nén phải có định dạng đúng quy định.",
      " Không bị nhiễm virus, không bị lỗi, hỏng và không thiết lập mật khẩu",
      " Các phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp file đính kèm trong E-HSMT không thể mở hoặc không đọc được thì chủ đầu tư phải thực hiện hành động nào sau đây?",
    "options": [
      " Đăng tải và phát hành lại toàn bộ E-HSMT",
      " Sửa đổi E-HSMT và không phải phát hành lại toàn bộ E-HSMT",
      " Đề nghị Trung tâm Đấu thầu qua mạng quốc gia sửa đổi E-HSMT trong trường hợp chủ đầu tư không sửa đổi được E-HSMT",
      " Các phương án trên đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp Hệ thống mạng đấu thầu quốc gia gặp sự cố không thể vận hành và phải tự động gia hạn thời điểm đóng thầu của các gói thầu bị ảnh hưởng (có thời điểm đóng thầu trong thời gian từ khi Hệ thống bị sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ) thì việc đánh giá E-HSDT được thực hiện trên cơ sở thời điểm đóng thầu nào sau đây?",
    "options": [
      " Thời điểm đóng thầu nêu trong E-TBMT đã được đăng tải trước thời điểm Hệ thống mạng đấu thầu quốc gia gặp sự cố",
      " Thời điểm đóng thầu mà Hệ thống mạng đấu thầu quốc gia tự động gia hạn",
      " Do Chủ đầu tư quyết định",
      " Phương án A và B đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Loại Chứng thư số nào sau đây được sử dụng trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Chứng thư số chuyên dùng do tất cả tổ chức có chức năng cung cấp dịch vụ chứng thực chữ ký số chuyên dùng cấp",
      " Tất cả các loại chứng thư số",
      " Chứng thư số công cộng do tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng cấp hoặc chứng thư số do tổ chức cung cấp dịch vụ chứng thực chữ ký số chuyên dùng Chính phủ cấp",
      " Phương án A và C đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, trường hợp nhà thầu sử dụng bảo lãnh dự thầu điện tử trên Hệ thống mạng đấu thầu quốc gia, phát biểu nào sau đây là đúng?",
    "options": [
      " Giá trị bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
      " Thời gian hiệu lực của bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
      " Đối tượng thụ hưởng bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
      " Các phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Gói thầu mua sắm hàng hóa có: \n- Thời điểm đóng thầu theo E-TBMT là: 8h00 ngày 25/9/2025\n- Hiệu lực của bảo đảm dự thầu theo yêu cầu của E-HSMT là: 90 ngày\n- Do lỗi hệ thống nên Hệ thống tự động gia hạn thời điểm đóng thầu mới là: 11h ngày 26/09/2025\nNhà thầu A đã nộp E-HSDT trước thời điểm Hệ thống xảy ra sự cố với hiệu lực của bảo đảm dự thầu là 90 ngày kể từ ngày 25/9/2025; Nhà thầu B nộp E-HSDT sau khi Hệ thống được khắc phục và trước thời điểm đóng thầu mới với hiệu lực của bảo đảm dự thầu là 90 ngày kể từ ngày 26/9/2025. Trong trường hợp này, bảo đảm dự thầu của nhà thầu A và nhà thầu B được đánh giá như thế nào?",
    "options": [
      " Bảo đảm dự thầu của nhà thầu A được đánh giá là không hợp lệ; Bảo đảm dự thầu của nhà thầu B được đánh giá là hợp lệ",
      " Bảo đảm dự thầu của nhà thầu A và nhà thầu B đều được đánh giá là hợp lệ",
      " Bảo đảm dự thầu của nhà thầu A được đánh giá là hợp lệ; Bảo đảm dự thầu của nhà thầu B được đánh giá là không hợp lệ",
      " Bảo đảm dự thầu của nhà thầu A và nhà thầu B đều được đánh giá là không hợp lệ"
    ],
    "correct": "B"
  },
  {
    "question": "So sánh điều kiện xét duyệt trúng thầu giữa phương pháp giá cố định và phương pháp dựa trên kỹ thuật đối với gói thầu dịch vụ tư vấn, điểm chung quyết định để nhà thầu được xếp hạng thứ nhất là gì?",
    "options": [
      " Có giá dự thầu thấp nhất",
      " Có điểm tổng hợp cao nhất",
      " Có điểm kỹ thuật cao nhất",
      " Có giá đề nghị trúng thầu thấp nhất"
    ],
    "correct": "C"
  },
  {
    "question": "Phương pháp kết hợp giữa kỹ thuật và giá được áp dụng cho gói thầu tư vấn có đặc điểm nào trong các phương án sau đây?",
    "options": [
      " Gói thầu tư vấn đơn giản, chi phí thấp",
      " Gói thầu tư vấn có yêu cầu kỹ thuật rất cao, chi phí cố định",
      " Gói thầu tư vấn chú trọng tới cả chất lượng và chi phí thực hiện",
      " Gói thầu tư vấn có quy trình thực hiện đã được tiêu chuẩn hoá"
    ],
    "correct": "C"
  },
  {
    "question": "Khi sử dụng phương pháp chấm điểm để xây dựng tiêu chuẩn đánh giá về kỹ thuật, mức điểm yêu cầu tối thiểu về kỹ thuật được quy định là bao nhiêu?",
    "options": [
      " Không thấp hơn 60% tổng số điểm kỹ thuật",
      " Không thấp hơn 70% tổng số điểm kỹ thuật",
      " Không thấp hơn 80% tổng số điểm kỹ thuật",
      " Không thấp hơn 90% tổng số điểm kỹ thuật"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu mua sắm hàng hóa, xây lắp, phi tư vấn, hỗn hợp, phương pháp giá đánh giá được áp dụng cho các hình thức lựa chọn nhà thầu nào?",
    "options": [
      " Chỉ áp dụng với đấu thầu rộng rãi",
      " Chỉ định thầu và mua sắm trực tiếp",
      " Đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh",
      " Tất cả hình thức lựa chọn nhà thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Điều kiện nào sau đây là bắt buộc đối với nhà thầu xây lắp nhưng không được đề cập trong điều kiện xét duyệt trúng thầu đối với nhà thầu tư vấn là tổ chức?",
    "options": [
      " Có hồ sơ dự thầu hợp lệ",
      " Có giá đề nghị trúng thầu không vượt giá gói thầu",
      " Có đề xuất kỹ thuật đáp ứng yêu cầu",
      " Có giá trị phần sai lệch thiếu không quá 10% giá dự thầu"
    ],
    "correct": "D"
  },
  {
    "question": "Khi sửa đổi hợp đồng làm thay đổi thời gian thực hiện nhưng không vượt thời gian thực hiện dự án, ai có quyền quyết định sửa đổi hợp đồng?",
    "options": [
      " Người có thẩm quyền",
      " Chủ đầu tư",
      " Cơ quan quản lý cấp trên của chủ đầu tư",
      " Bên mời thầu"
    ],
    "correct": "B"
  },
  {
    "question": "Thời gian có hiệu lực của bảo đảm thực hiện hợp đồng được tính từ khi nào đến khi nào?",
    "options": [
      " Từ ngày ký hợp đồng đến ngày thanh toán cuối cùng",
      " Từ ngày hợp đồng có hiệu lực đến ngày các bên hoàn thành nghĩa vụ hoặc chuyển sang thực hiện nghĩa vụ bảo hành đối với trường hợp có quy định về bảo hành",
      " Từ ngày nộp hồ sơ dự thầu đến ngày hoàn thành nghĩa vụ theo hợp đồng",
      " Từ ngày thông báo trúng thầu đến ngày hết thời hạn bảo hành"
    ],
    "correct": "B"
  },
  {
    "question": "Hợp đồng theo thời gian có thể áp dụng trong trường hợp nào?",
    "options": [
      " Trong tình trạng khẩn cấp",
      " Sửa chữa, bảo trì công trình, máy móc, thiết bị",
      " Dịch vụ tư vấn khi khó xác định được phạm vi và thời gian thực hiện dịch vụ",
      " Tất cả phương án trên đều đúng"
    ],
    "correct": "D"
  },
  {
    "question": "Giá trị bảo đảm thực hiện hợp đồng được xác định dựa trên cơ sở nào?",
    "options": [
      " Giá gói thầu",
      " Giá hợp đồng",
      " Giá dự thầu của nhà thầu",
      " Tổng mức đầu tư của dự án"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp nào sau đây chủ đầu tư được tự quyết định sửa đổi hợp đồng mà không cần người có thẩm quyền cho phép?",
    "options": [
      " Sửa đổi hợp đồng làm vượt giá gói thầu đã duyệt và vượt tổng mức đầu tư của dự án",
      " Sửa đổi hợp đồng làm thay đổi thời gian thực hiện hợp đồng nhưng không làm vượt thời gian thực hiện dự án hoặc vượt giá gói thầu (bao gồm dự phòng) được duyệt nhưng không làm vượt tổng mức đầu tư",
      " Sửa đổi hợp đồng làm thay đổi thời gian thực hiện hợp đồng và vượt thời gian thực hiện dự án",
      " Sửa đổi hợp đồng làm thay đổi thiết kế cơ sở dẫn đến phải điều chỉnh chủ trương đầu tư"
    ],
    "correct": "B"
  },
  {
    "question": "Các bên không phải ký kết văn bản sửa đổi hợp đồng khi thay đổi giá hợp đồng nếu đáp ứng đủ điều kiện nào sau đây?",
    "options": [
      " Không vượt giá gói thầu, nhưng có thể vượt thời gian thực hiện gói thầu ghi trong hợp đồng",
      " Không vượt giá gói thầu, không vượt thời gian thực hiện gói thầu ghi trong hợp đồng và phương pháp, công thức, hạng mục và các nội dung cần thiết để điều chỉnh đã quy định trong hợp đồng",
      " Không vượt thời gian thực hiện gói thầu ghi trong hợp đồng nhưng có thể vượt giá gói thầu",
      " Khi thay đổi thời gian thực hiện hợp đồng nhưng không làm vượt thời gian thực hiện dự án hoặc vượt giá gói thầu (bao gồm dự phòng) được duyệt nhưng không làm vượt tổng mức đầu tư"
    ],
    "correct": "B"
  },
  {
    "question": "Đâu là điểm khác biệt chính giữa hợp đồng theo đơn giá cố định và hợp đồng theo đơn giá điều chỉnh?",
    "options": [
      " Hợp đồng theo đơn giá cố định áp dụng cho gói thầu có thời gian thực hiện dài, hợp đồng theo đơn giá điều chỉnh áp dụng cho gói thầu có thời gian thực hiện ngắn",
      " Đơn giá trong hợp đồng đơn giá cố định không thay đổi, còn đơn giá trong hợp đồng đơn giá điều chỉnh có thể thay đổi",
      " Hợp đồng theo đơn giá cố định không có chi phí dự phòng, còn hợp đồng theo đơn giá điều chỉnh có chi phí dự phòng",
      " Hợp đồng theo đơn giá cố định chỉ áp dụng cho gói thầu dịch vụ tư vấn, hợp đồng theo đơn giá điều chỉnh áp dụng cho gói thầu xây lắp"
    ],
    "correct": "B"
  },
  {
    "question": "So sánh hai tình huống sửa đổi hợp đồng: (1) Vượt giá gói thầu 10% nhưng không vượt tổng mức đầu tư; (2) Vượt giá gói thầu 2% và làm tổng mức đầu tư tăng 1%, thẩm quyền phê duyệt có gì khác nhau?",
    "options": [
      " Cả 2 tình huống đều do chủ đầu tư quyết định",
      " Tình huống (1) do chủ đầu tư quyết định, tình huống (2) phải trình người có thẩm quyền xem xét, quyết định",
      " Cả 2 tình huống đều do người có thẩm quyền quyết định",
      " Tình huống (1) phải trình người có thẩm quyền cho phép, tình huống (2) do Chủ tịch Uỷ ban nhân dân tỉnh quyết định"
    ],
    "correct": "B"
  },
  {
    "question": "Loại hợp đồng nào được áp dụng khi tại thời điểm lựa chọn nhà thầu chưa đủ cơ sở xác định phạm vi công việc, nhu cầu cần thiết về các yếu tố, chi phí đầu vào để thực hiện các công việc dự kiến của hợp đồng?",
    "options": [
      " Hợp đồng trọn gói",
      " Hợp đồng theo chi phí cộng phí",
      " Hợp đồng theo đơn giá cố định",
      " Hợp đồng theo kết quả đầu ra"
    ],
    "correct": "B"
  },
  {
    "question": "Gói thầu xây lắp A được phê duyệt KHLCNT với thời gian thực hiện gói thầu là 120 ngày. Trong quá trình thực hiện Hợp đồng, do có phát sinh dẫn tới thời gian thực hiện gói thầu bị kéo dài thành 180 ngày. Trong trường hợp này, chủ đầu tư xử lý như thế nào?",
    "options": [
      " Báo cáo người có thẩm quyền trước khi điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu đã được phê duyệt",
      " Chủ đầu tư thực hiện điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu đã được phê duyệt mà không cần báo cáo người có thẩm quyền",
      " Chủ đầu tư không cần điều chỉnh kế hoạch lựa chọn nhà thầu",
      " Các phương án trên đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Gói thầu áp dụng hình thức chào giá trực tuyến rút gọn, việc phê duyệt kết quả lựa chọn nhà thầu thực hiện như thế nào?",
    "options": [
      "Trên cơ sở đề nghị của tổ chuyên gia",
      " Trên cơ sở đề nghị của tổ thẩm định",
      " Trên cơ sở chấp thuận được trao hợp đồng của nhà thầu",
      " Phương án A và B đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Việc xét duyệt trúng thầu đối với gói thầu áp dụng hình thức chào giá trực tuyến theo quy trình rút gọn thực hiện như thế nào?",
    "options": [
      " Căn cứ vào giá dự thầu trong đơn dự thầu của nhà thầu",
      " Căn cứ vào giá gói thầu trong kế hoạch lựa chọn nhà thầu được phê duyệt",
      " Căn cứ vào giá dự thầu tại thời điểm kết thúc chào giá trực tuyến của nhà thầu xếp thứ nhất",
      " Các phương án trên đều sai"
    ],
    "correct": "C"
  },
  {
    "question": "Nhận định nào sau đây là đúng?",
    "options": [
      " Việc áp dụng mua sắm trực tuyến không cần phê duyệt trong kế hoạch lựa chọn nhà thầu và được áp dụng đối với hàng hóa, dịch vụ tư vấn của gói thầu thuộc dự toán mua sắm có giá gói thầu không quá 500 triệu đồng",
      " Việc áp dụng mua sắm trực tuyến phải được phê duyệt trong kế hoạch lựa chọn nhà thầu và được áp dụng đối với gói thầu mua sắm hàng hóa, gói thầu dịch vụ tư vấn thuộc dự toán mua sắm có giá gói thầu không quá 500 triệu đồng",
      " Mua sắm trực tuyến phải được phê duyệt trong kế hoạch lựa chọn nhà thầu và được áp dụng đối với gói thầu mua sắm hàng hóa, gói thầu dịch vụ tư vấn thuộc dự toán có giá gói thầu không quá 01 tỷ đồng",
      " Các phương án trên đều sai"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp gói thầu có giá gói thầu dưới 500 triệu đồng đối với dự toán mua sắm thì chủ đầu tư được quyết định cho phép nhà thầu nào sau đây được tham dự thầu?",
    "options": [
      "Nhà thầu có từ 50% lao động trở lên là người khuyết tật, thương binh, dân tộc thiểu số có hợp đồng lao động với thời gian thực hiện hợp đồng từ 03 tháng trở lên và đến thời điểm đóng thầu hợp đồng vẫn còn hiệu lực",
      " Nhà thầu có từ 25% lao động trở lên là người khuyết tật, thương binh, dân tộc thiểu số có hợp đồng lao động với thời gian thực hiện hợp đồng từ 03 tháng trở lên và đến thời điểm đóng thầu hợp đồng vẫn còn hiệu lực",
      " Nhà thầu có từ 50% lao động trở lên là người khuyết tật, thương binh, dân tộc thiểu số có hợp đồng lao động với thời gian thực hiện hợp đồng dưới 03 tháng và đến thời điểm đóng thầu hợp đồng vẫn còn hiệu lực",
      " Nhà thầu có từ 25% lao động trở lên là người khuyết tật, thương binh, dân tộc thiểu số có hợp đồng lao động với thời gian thực hiện hợp đồng dưới 03 tháng và đến thời điểm đóng thầu hợp đồng vẫn còn hiệu lực"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp nào sau đây nhà thầu bị coi là không đáp ứng tư cách hợp lệ khi tham dự thầu theo quy định tại khoản 1 Điều 5 của Luật Đấu thầu?",
    "options": [
      " Nhà thầu A sử dụng tài khoản tham gia Hệ thống của chi nhánh B để tham dự thầu",
      " Nhà thầu A sử dụng tài khoản tham gia Hệ thống của chính đơn vị mình để tham dự thầu",
      " Nhà thầu A sử dụng tài khoản tham gia Hệ thống của công ty con hạch toán phụ thuộc C để tham dự thầu",
      " Đáp án A và C là đúng"
    ],
    "correct": "D"
  },
  {
    "question": "E-HSMT gói thầu mua sắm hàng hóa có yêu cầu cung cấp hàng mẫu, trong trường hợp này hàng mẫu được nhà thầu gửi đến chủ đầu tư theo cách thức nào sau đây là phù hợp?",
    "options": [
      " Nhà thầu có thể nộp bổ sung hàng mẫu trong thời hạn 05 ngày làm việc sau thời điểm đóng thầu",
      " Nhà thầu phải nộp hàng mẫu ngay sau khi nộp thành công E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      " Nhà thầu nộp hàng mẫu trong thời hạn 05 ngày sau khi nộp thành công E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
      " Các phương án trên đều sai."
    ],
    "correct": "A"
  },
  {
    "question": "Đối với đấu thầu không qua mạng, biên bản mở thầu bắt buộc phải có chữ ký của các chủ thể nào sau đây?",
    "options": [
      " Chủ đầu tư, tổ chuyên gia và các nhà thầu tham dự lễ mở thầu",
      " Chủ đầu tư, tổ chuyên gia và các nhà thầu tham dự thầu",
      " Chủ đầu tư và các nhà thầu tham dự lễ mở thầu",
      " Các phương án trên đều đúng"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với đấu thầu qua mạng, nội dung nào sau đây là đúng?",
    "options": [
      " Việc đánh giá HSDT được thực hiện trên bản chụp",
      " Nhà thầu phải chịu trách nhiệm về tính thống nhất giữa bản gốc và bản chụp",
      " Trường hợp có sự sai khác giữa bản gốc và bản chụp nhưng không làm thay đổi thứ tự xếp hạng nhà thầu thì căn cứ vào bản gốc để đánh giá",
      " Các phương án trên đều sai"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với nhà thầu liên danh, việc ký kết văn bản hợp đồng được thực hiện như thế nào?",
    "options": [
      " Các thành viên liên danh có thể ủy quyền cho thành viên đứng đầu liên danh ký, đóng dấu (nếu có)",
      " Tất cả thành viên tham gia liên danh phải trực tiếp ký, đóng dấu (nếu có)",
      " Các thành viên liên danh có thể ủy quyền cho bất kỳ thành viên nào trong liên danh ký, đóng dấu (nếu có)",
      " Bất kỳ thành viên nào trong liên danh cũng có thể đại diện ký, đóng dấu (nếu có)"
    ],
    "correct": "B"
  },
  {
    "question": "Nhà thầu thực hiện gói thầu xây lắp theo hình thức lựa chọn nhà thầu nào thì không phải thực hiện bảo đảm thực hiện hợp đồng?",
    "options": [
      " Đấu thầu rộng rãi",
      " Tự thực hiện",
      " Đấu thầu hạn chế",
      " Chào hàng cạnh tranh"
    ],
    "correct": "B"
  },
  {
    "question": "Chào giá trực tuyến theo quy trình thông thường được thực hiện ở bước nào trong quá trình lựa chọn nhà thầu?",
    "options": [
      " Bước chuẩn bị lựa chọn nhà thầu",
      " Bước đánh giá về tài chính",
      " Bước thương thảo hợp đồng",
      " Bước đánh giá hồ sơ đề xuất kỹ thuật"
    ],
    "correct": "B"
  },
  {
    "question": "Trong quá trình chào giá trực tuyến, thông tin nào của nhà thầu không được công khai trên Hệ thống mạng đấu thầu quốc gia?",
    "options": [
      " Mức giá chào",
      " Tên nhà thầu",
      " Các yếu tố khác ngoài giá (nếu có)",
      " Thời gian còn lại của phiên chào giá"
    ],
    "correct": "B"
  },
  {
    "question": "Mua sắm trực tuyến có cần được phê duyệt trong kế hoạch lựa chọn nhà thầu không?",
    "options": [
      " Không phải phê duyệt trong kế hoạch lựa chọn nhà thầu",
      " Phải được phê duyệt trong kế hoạch lựa chọn nhà thầu",
      " Chỉ phải phê duyệt trong kế hoạch lựa chọn nhà thầu khi giá gói thầu lớn hơn 500 triệu đồng",
      " Chỉ phải phê duyệt trong kế hoạch lựa chọn nhà thầu đối với các gói thầu thuộc dự án đầu tư"
    ],
    "correct": "B"
  },
  {
    "question": "Khi có yêu cầu đặt hàng trong mua sắm trực tuyến, Hệ thống mạng đấu thầu quốc gia sẽ tự động gửi thông báo cho ai?",
    "options": [
      " Nhà thầu đã trúng thầu thông qua hình thức mua sắm tập trung hoặc không tập trung trên Hệ thống mạng đấu thầu quốc gia",
      " Nhà thầu đã trúng thầu trong mua sắm tập trung trước đó",
      " Chủ đầu tư",
      " Đơn vị mua sắm tập trung"
    ],
    "correct": "B"
  },
  {
    "question": "Sau khi nhận được yêu cầu đặt hàng qua hình thức mua sắm trực tuyến, nhà thầu có bao nhiêu thời gian để xác nhận hoặc từ chối đơn hàng?",
    "options": [
      " 24 giờ",
      " 03 ngày làm việc",
      " 05 ngày",
      " 05 ngày làm việc"
    ],
    "correct": "B"
  },
  {
    "question": "Sau khi kết thúc chào giá trực tuyến, nếu có nhiều nhà thầu cùng chào giá thấp nhất bằng nhau, nhà thầu nào sẽ được xếp hạng thứ nhất?",
    "options": [
      " Nhà thầu có năng lực tài chính tốt nhất",
      " Nhà thầu chào giá đầu tiên thấp nhất",
      " Nhà thầu nộp hồ sơ dự thầu sớm nhất",
      " Yêu cầu các nhà thầu này chào lại giá"
    ],
    "correct": "B"
  },
  {
    "question": "Chủ đầu tư phải gửi thông báo mời tham gia chào giá trực tuyến theo quy trình thông thường đến các nhà thầu đáp ứng yêu cầu kỹ thuật trong thời hạn tối thiểu bao lâu trước thời điểm bắt đầu chào giá?",
    "options": [
      " 24 giờ",
      " 03 ngày làm việc",
      " 05 ngày",
      " 05 ngày làm việc"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu rộng rãi không qua mạng, nếu sau khi đóng thầu, nhà thầu tự phát hiện hồ sơ dự thầu thiếu tài liệu chứng minh năng lực, kinh nghiệm thì nhà thầu nên làm gì?",
    "options": [
      " Trường hợp chủ đầu tư có yêu cầu bổ sung, làm rõ nhà thầu mới được bổ sung tài liệu chứng minh năng lực, kinh nghiệm",
      " Được phép gửi tài liệu đến chủ đầu tư để làm rõ về năng lực, kinh nghiệm",
      " Không được bổ sung tài liệu chứng minh năng lực, kinh nghiệm còn thiếu",
      " Rút hồ sơ dự thầu để nộp lại"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp nào nhà thầu được quyền từ chối hoàn thiện hợp đồng mà không bị đánh giá về uy tín khi tham dự thầu, không bị tịch thu bảo đảm dự thầu?",
    "options": [
      " Nhà thầu được quyền từ chối hoàn thiện hợp đồng trong mọi trường hợp",
      " Khi chủ đầu tư đưa ra các yêu cầu khi hoàn thiện hợp đồng không phù hợp với nội dung hồ sơ mời thầu, hồ sơ dự thầu",
      " Khi nhà thầu đề nghị điều chỉnh đơn giá hạng mục mà nhà thầu đã chào theo yêu cầu của hồ sơ mời thầu nhưng chủ đầu tư không chấp nhận",
      " Phương án B và C đều đúng"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu không qua mạng, trường hợp hồ sơ dự thầu của nhà thầu có sai lệch thiếu sau khi hiệu chỉnh sai lệch vẫn được xếp hạng thứ nhất và hồ sơ dự thầu của nhà thầu này không có đơn giá của phần sai lệch thiếu, đơn giá nào sẽ được ưu tiên áp dụng đầu tiên để đề nghị trúng thầu?",
    "options": [
      " Đơn giá trong dự toán gói thầu",
      " Đơn giá tương ứng có giá trị thấp nhất trong các hồ sơ dự thầu khác vượt qua bước đánh giá về kỹ thuật",
      " Đơn giá hình thành giá gói thầu",
      " Đơn giá tương ứng có giá trị cao nhất trong các hồ sơ dự thầu khác vượt qua bước đánh giá về kỹ thuật"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với gói thầu bảo hiểm, nhà thầu tham dự thầu có được xuất trình giấy chứng nhận bảo hiểm bảo lãnh do chính mình phát hành không?",
    "options": [
      " Được dùng giấy chứng nhận bảo hiểm bảo lãnh do chính mình phát hành nếu nhà thầu là doanh nghiệp bảo hiểm uy tín",
      " Không được dùng giấy chứng nhận bảo hiểm bảo lãnh do chính mình phát hành nếu giá trị bảo lãnh từ 50 triệu đồng trở lên, được dùng nếu giá trị bảo lãnh nhỏ hơn 50 triệu đồng",
      " Chỉ được dùng giấy chứng nhận bảo hiểm bảo lãnh do chính mình phát hành nếu giá trị bảo lãnh nhỏ hơn 50 triệu đồng",
      " Tất cả phương án đều sai"
    ],
    "correct": "D"
  },
  {
    "question": "Trường hợp sau khi có quyết định phê duyệt kết quả lựa chọn nhà thầu, nhà thầu không trúng thầu có yêu cầu giải thích về lý do cụ thể không trúng thầu, chủ đầu tư phải trả lời trong thời hạn bao lâu?",
    "options": [
      " 02 ngày làm việc kể từ ngày được yêu cầu",
      " 03 ngày làm việc kể từ ngày được yêu cầu",
      " 05 ngày làm việc kể từ ngày được yêu cầu",
      " 07 ngày làm việc kể từ ngày được yêu cầu"
    ],
    "correct": "A"
  },
  {
    "question": "Đối với gói thầu đấu thầu trước, nhà thầu có phải thực hiện biện pháp bảo đảm dự thầu không?",
    "options": [
      " Không phải thực hiện nhưng phải có cam kết trong đơn dự thầu",
      " Bắt buộc phải thực hiện",
      " Tuỳ thuộc vào quyết định của chủ đầu tư",
      " Chỉ phải thực hiện đối với gói thầu có giá trị bảo đảm dự thầu trên 50 triệu đồng"
    ],
    "correct": "A"
  },
  {
    "question": "Trường hợp các nhà thầu chào hàng hóa có cùng ký mã hiệu (nếu có), hãng sản xuất, năm sản xuất, xuất xứ Việt Nam nhưng có nhà thầu kê khai, có nhà thầu không kê khai hàng hóa này thuộc đối tượng ưu đãi thì chủ đầu tư xử lý thế nào?",
    "options": [
      " Không tính ưu đãi của tất cả các nhà thầu tham dự",
      " Quyết định cho các nhà thầu không kê khai được làm rõ để có cơ sở đánh giá ưu đãi",
      " Chỉ xét ưu đãi cho các nhà thầu đã kê khai",
      " Tính ưu đãi cho tất cả nhà nhà thầu tham dự mà không cần làm rõ với nhà thầu không kê khai"
    ],
    "correct": "B"
  },
  {
    "question": "Đối với đấu thầu qua mạng, sau khi đánh giá E-HSDT, tổ trưởng tổ chuyên gia đính kèm bản scan báo cáo đánh giá E-HSDT lên Hệ thống mạng đấu thầu quốc gia với yêu cầu nào sau đây?",
    "options": [
      " Báo cáo đánh giá E-HSDT có chữ ký của tất cả thành viên trong tổ chuyên gia",
      " Báo cáo đánh giá E-HSDT chỉ cần có chữ ký của tổ trưởng tổ chuyên gia",
      " Báo cáo đánh giá E-HSDT (đăng tải báo cáo đánh giá tổng hợp, không cần kèm theo các phiếu chấm của thành viên trong tổ chuyên gia)",
      " Phương án B và C đều đúng"
    ],
    "correct": "A"
  },
  {
    "question": "Hiện nay, Việt Nam đã mở cửa thị trường mua sắm chính phủ (đấu thầu) trong những hiệp định nào?",
    "options": [
      " Chỉ Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      " Hiệp định CPTPP và Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
      " Hiệp định CPTPP, Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
      " Tất cả các hiệp định mà Việt Nam là thành viên"
    ],
    "correct": "C"
  },
  {
    "question": "Số lượng các nước thành viên Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP) ký kết hiệp định ban đầu là bao nhiêu nước?",
    "options": [
      " 8 nước",
      " 9 nước",
      " 11 nước",
      " 12 nước"
    ],
    "correct": "C"
  },
  {
    "question": "Trong các hiệp định dưới đây, hiệp định nào không có quy định về các trường hợp chỉ định thầu?",
    "options": [
      " Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      " Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
      " Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
      " Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)"
    ],
    "correct": "D"
  },
  {
    "question": "Hoạt động nào sau đây không thuộc phạm vi điều chỉnh của Nghị định số 95/2020/NĐCP?",
    "options": [
      " Mua sắm thiết bị văn phòng",
      " Thuê dịch vụ tư vấn",
      " Thuê quyền sử dụng đất",
      " Mua sắm vật tư y tế"
    ],
    "correct": "C"
  },
  {
    "question": "Theo các hiệp định mà Việt Nam có mở cửa thị trường mua sắm chính phủ (đấu thầu), nhà thầu nước ngoài được tham gia đấu thầu tại Việt Nam trong trường hợp nào?",
    "options": [
      " Tất cả các gói thầu",
      " Chỉ gói thầu ODA",
      " Gói thầu thuộc phạm vi điều chỉnh của hiệp định",
      " Gói thầu có giá trị lớn, phức tạp"
    ],
    "correct": "C"
  },
  {
    "question": "Theo quy định tại Nghị định số 95/2020/NĐCP, đấu thầu nội khối là?",
    "options": [
      " Đấu thầu mà chỉ có nhà thầu nội khối được tham dự",
      " Đấu thầu cho các dự án trong khối CPTPP",
      " Đấu thầu giữa các nước thành viên EVFTA, UKVFTA",
      " Đấu thầu trong nước"
    ],
    "correct": "A"
  },
  {
    "question": "Theo quy định tại Nghị định số 09/2022/NĐCP, cơ quan mua sắm phải tổ chức đấu thầu nội khối, trừ trường hợp nào?",
    "options": [
      " Không có nhà thầu trong nước tham gia",
      " Giá gói thầu quá lớn",
      " Người có thẩm quyền xét thấy cần tổ chức đấu thầu quốc tế để mang lại hiệu quả cao hơn cho dự án, gói thầu",
      " Hàng hóa thuộc gói thầu quá phức tạp mà nhà thầu trong nước không đáp ứng được"
    ],
    "correct": "C"
  },
  {
    "question": "Theo Thông tư số 21/2022/TT-BKHĐT, khi nào được đưa ra yêu cầu về nhân sự chủ chốt trong gói thầu dịch vụ phi tư vấn?",
    "options": [
      " Trong mọi trường hợp",
      " Khi giá gói thầu lớn",
      " Chỉ khi dịch vụ có yếu tố đặc thù, phức tạp cần thiết phải có nhân sự có hiểu biết, nhiều kinh nghiệm đảm nhận",
      " Khi có yêu cầu của nhà thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA) có hiệu lực từ ngày nào?",
    "options": [
      " 01/7/2020",
      " 01/8/2020",
      " 01/9/2020",
      " 01/10/2020"
    ],
    "correct": "B"
  },
  {
    "question": "Trường hợp tổ chức lựa chọn nhà thầu đối với gói thầu mua sắm hàng hóa thuộc phạm vi điều chỉnh của Hiệp định UKVFTA tại thời điểm tháng 9/2025, cơ quan mua sắm lập hồ sơ mời thầu theo Mẫu hồ sơ mời thầu ban hành kèm theo Thông tư nào?",
    "options": [
      " Thông tư số 09/2020/TT-BKHĐT",
      " Thông tư số 12/2022/TT-BKHĐT",
      " Thông tư số 15/2022/TT-BKHĐT",
      " Thông tư số 20/2022/TT-BKHĐT"
    ],
    "correct": "B"
  },
  {
    "question": "Việc đấu thầu thuốc theo quy định của Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA) được Chính phủ giao cơ quan, tổ chức nào hướng dẫn?",
    "options": [
      " Bộ Tư pháp",
      " Bộ Y tế",
      " Bộ Tài chính",
      " Bộ Công Thương"
    ],
    "correct": "B"
  },
  {
    "question": "Việt Nam chính thức trở thành thành viên của Hiệp định mua sắm chính phủ của WTO (GPA) từ năm nào?",
    "options": [
      " 2018",
      " 2019",
      " 2020",
      " Việt Nam chưa phải là thành viên của GPA"
    ],
    "correct": "D"
  },
  {
    "question": "Theo quy định tại Nghị định số 95/2020/NĐ-CP (được sửa đổi, bổ sung tại Nghị định số 09/2022/NĐ-CP, Nghị định số 17/2025/NĐCP), khái niệm Nước thành viên không bao gồm:",
    "options": [
      " Nước thành viên Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
      " Nước thành viên EU",
      " Vương quốc Anh và Bắc Ai-len",
      " Các nước ASEAN chưa gia nhập Hiệp định CPTPP"
    ],
    "correct": "D"
  },
  {
    "question": "Đối với gói thầu thuộc phạm vi điều chỉnh của Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP), ngôn ngữ sử dụng trong đấu thầu nội khối là:",
    "options": [
      " Chỉ tiếng Việt",
      " Chỉ tiếng Anh",
      " Tiếng Việt; hoặc tiếng Việt và tiếng Anh",
      " Bất kỳ ngôn ngữ nào của các nước thành viên"
    ],
    "correct": "C"
  },
  {
    "question": "Theo quy định tại Thông tư số 21/2022/TTBKHĐT, hồ sơ mời thầu gói thầu dịch vụ phi tư vấn không được đưa ra yêu cầu nào sau đây:",
    "options": [
      " Yêu cầu về năng lực",
      " Yêu cầu về kinh nghiệm",
      " Yêu cầu nhà thầu phải có kinh nghiệm cung cấp dịch vụ trong lãnh thổ của một quốc gia cụ thể",
      " Yêu cầu về chất lượng dịch vụ"
    ],
    "correct": "C"
  },
  {
    "question": "Trong Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP), việc áp dụng biện pháp ưu đãi trong nước:",
    "options": [
      " Được phép áp dụng vĩnh viễn",
      " Không bao giờ được phép áp dụng",
      " Được phép áp dụng trong thời gian chuyển tiếp",
      " Tùy quy mô, tính chất từng gói thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Đối với gói thầu thuộc phạm vi điều chỉnh của Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP), Nghị định số 95/2020/NĐ-CP quy định những hình thức lựa chọn nhà thầu nào?",
    "options": [
      " Đấu thầu hạn chế và chỉ định thầu",
      " Chỉ có chỉ định thầu",
      " Đấu thầu rộng rãi và chỉ định thầu",
      " Chỉ có đấu thầu rộng rãi"
    ],
    "correct": "C"
  },
  {
    "question": "Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP) có cho phép áp dụng đấu thầu qua mạng không?",
    "options": [
      " Không cho phép",
      " Bắt buộc phải áp dụng",
      " Khuyến khích áp dụng",
      " Tùy quy mô, tính chất từng gói thầu"
    ],
    "correct": "C"
  },
  {
    "question": "Gói thầu mua thuốc là gói thầu nào?",
    "options": [
      " Gói thầu mua sắm hàng hóa",
      " Gói thầu cung cấp dịch vụ phi tư vấn",
      " Gói thầu hỗn hợp",
      " Gói thầu xây lắp"
    ],
    "correct": "A"
  },
  {
    "question": "Đàm phán giá được áp dụng trong trường hợp nào sau đây?",
    "options": [
      " Mua vật tư tiêu hao",
      " Mua thuốc, thiết bị y tế, vật tư xét nghiệm chỉ có 01 hoặc 02 hãng sản xuất",
      " Mua hàng hóa chỉ có 01 hãng sản xuất",
      " Mua hàng hóa chỉ có 01 hoặc 02 hãng sản xuất"
    ],
    "correct": "B"
  },
  {
    "question": "Thời gian có hiệu lực thi hành của Luật số 90/2025/QH15?",
    "options": [
      " Từ ngày 01 tháng 7 năm 2025",
      " Từ ngày 04 tháng 8 năm 2025",
      " Từ ngày 08 tháng 8 năm 2025",
      " Tất cả các đáp án trên đều sai"
    ],
    "correct": "A"
  },
  {
    "question": "Thông tư số 80/2025/TT-BTC quy định chi tiết mẫu hồ sơ yêu cầu, báo cáo đánh giá, báo cáo thẩm định, kiểm tra, báo cáo tình hình thực hiện hoạt động đấu thầu có hiệu lực từ thời điểm nào?",
    "options": [
      " Ngày 08/8/2025",
      " Ngày 04/8/2025",
      " Ngày 01/8/2025",
      " Ngày 01/7/2025"
    ],
    "correct": "A"
  }
]
