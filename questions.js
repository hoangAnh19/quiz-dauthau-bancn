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
        "Việc đánh giá về doanh thu căn cứ trên từng phần mà nhà thầu tham dự, nhà thầu không phải đáp ứng tổng doanh thu đối với các phần mà nhà thầu tham dự",
        "Việc đánh giá về doanh thu căn cứ trên phần có giá trị lớn nhất trong tổng số các phần nhà thầu tham dự",
        "Các phương án trên đều sai"
      ],
      "correct": "B"
    },
    {
      "question": "Gói thầu mua sắm hàng hóa chia thành nhiều phần thì việc đánh giá về quy mô hợp đồng tương tự đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
      "options": [
        "Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
        "Việc đánh giá về quy mô hợp đồng tương tự tương ứng với từng phần mà nhà thầu tham dự, nhà thầu không phải đáp ứng tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
        "Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên phần có giá trị nhỏ nhất trong tổng số các phần mà nhà thầu tham dự",
        "Các phương án trên đều sai"
      ],
      "correct": "B"
    },
    {
      "question": "Trường hợp E-HSMT của gói thầu mua sắm hàng hóa có yêu cầu về cam kết, hợp đồng nguyên tắc bảo hành, bảo trì, duy tu, bảo dưỡng mà E-HSDT của nhà thầu không đính kèm các tài liệu này thì Chủ đầu tư xử lý như thế nào?",
      "options": [
        "Hồ sơ dự thầu của nhà thầu bị loại, không được xem xét, đánh giá",
        "Chủ đầu tư yêu cầu nhà thầu làm rõ, bổ sung tài liệu trong một khoảng thời gian phù hợp nhưng không ít hơn 03 ngày làm việc để làm cơ sở đánh giá E-HSDT",
        "Xin ý kiến người có thẩm quyền để xử lý tình huống trong đấu thầu trên cơ sở bảo đảm các mục tiêu của công tác đấu thầu",
        "Tiếp tục đánh giá E-HSDT, trường hơp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ tài liệu"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với gói thầu mua sắm hàng hóa áp dụng đấu thầu rộng rãi, trong hồ sơ dự thầu nhà thầu không đề xuất cụ thể ký mã hiệu, nhãn hiệu, xuất xứ, hãng sản xuất thì xử lý như thế nào?",
      "options": [
        "Chủ đầu tư yêu cầu nhà thầu làm rõ các thông tin này để làm cơ sở đánh giá trên cơ sở không được thay đổi giá dự thầu",
        "Tổ chuyên gia căn cứ theo cataloge, đề xuất kỹ thuật kèm theo để làm cơ sở đánh giá",
        "Hồ sơ dự thầu của nhà thầu không được xem xét, đánh giá",
        "Tiếp tục đánh giá hồ sơ dự thầu, trường hơp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ các thông tin này"
      ],
      "correct": "C"
    },
    {
      "question": "Hồ sơ mời thầu của gói thầu xây lắp có quy định cho phép sử dụng nhà thầu phụ, trường hợp nhà thầu đề xuất sử dụng thầu phụ thì việc đánh giá năng lực kinh nghiệm của nhà thầu phụ được thực hiện như thế nào?",
      "options": [
        "Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu không phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
        "Không đánh giá năng lực, kinh nghiệm của nhà thầu phụ, nhà thầu tham dự thầu vẫn phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
        "Do chủ đầu tư quyết định có đánh giá hoặc không đánh giá năng lực, kinh nghiệm nhà thầu phụ",
        "Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu cũng phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận"
      ],
      "correct": "B"
    },
    {
      "question": "Khi tham dự thầu đấu thầu qua mạng, nhà thầu có được ủy quyền cho Giám đốc chi nhánh tham dự thầu hay không?",
      "options": [
        "Được ủy quyền bằng giấy ủy quyền",
        "Không được ủy quyền",
        "Được ủy quyền không cần giấy ủy quyền nhưng nhà thầu phải tạo tài khoản nghiệp vụ cho giám đốc chi nhánh",
        "Các phương án trên đều sai"
      ],
      "correct": "A"
    },
    {
      "question": "Hợp đồng theo theo tỷ lệ phần trăm có thể được áp dụng đối với gói thầu  nào sau đây?",
      "options": [
        "Mua sắm thiết bị y tế",
        "Xây dựng công trình",
        "Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu",
        "Tư vấn giám sát"
      ],
      "correct": "C"
    },
    {
      "question": "Cơ sở để thanh toán hợp đồng cho nhà thầu là gì?",
      "options": [
        "Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
        "Dự toán gói thầu và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
        "Dự toán gói thầu",
        "Phương án A và C đều sai"
      ],
      "correct": "A"
    },
    {
      "question": "Nhà thầu không được hoàn trả bảo đảm thực hiện hợp đồng trong trường hợp nào?",
      "options": [
        "Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực",
        "Thực hiện hợp đồng chậm tiến độ nhưng vẫn hoàn thành hợp đồng",
        "Nhà thầu đề nghị điều chỉnh tiến độ do bất khả kháng",
        "Nhà thầu đề xuất thay đổi nhà thầu phụ"
      ],
      "correct": "A"
    },
    {
      "question": "Trường hợp nào sau đây phải áp dụng bảo đảm thực hiện hợp đồng?",
      "options": [
        "Nhà thầu cung dịch vụ phi tư vấn",
        "Nhà thầu thực hiện gói thầu có giá gói thầu thuộc hạn mức chỉ định thầu",
        "Nhà thầu cung cấp dịch vụ tư vấn",
        "Nhà thầu được lựa chọn theo hình thức tự thực hiện"
      ],
      "correct": "A"
    },
    {
      "question": "Hồ sơ hợp đồng bao gồm các tài liệu nào sau đây?",
      "options": [
        "Văn bản hợp đồng",
        "Phụ lục hợp đồng gồm danh mục chi tiết về phạm vi công việc, biểu giá, tiến độ thực hiện (nếu có)",
        "Quyết định phê duyệt kết quả lựa chọn nhà thầu",
        "Tất cả các phương án trên."
      ],
      "correct": "D"
    },
    {
      "question": "Phát hành hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được thực hiện như thế nào?",
      "options": [
        "Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành sau khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
        "Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành trước khi với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu",
        "Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành tại thời điểm 03 ngày sau khi thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu được đăng tải thành công trên Hệ thống mạng đấu thầu quốc gia",
        "Hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu được phát hành đồng thời với thông báo mời quan tâm, thông báo mời sơ tuyển, thông báo mời thầu"
      ],
      "correct": "D"
    },
    {
      "question": "Hãy chọn phương án đúng về đấu thầu trước?",
      "options": [
        "Đấu thầu trước là việc thực hiện trước một số thủ tục trước khi dự án được phê duyệt đầu tư nhằm mục đích đẩy nhanh tiến độ thực hiện dự án, trừ gói thầu cần thực hiện trước khi phê duyệt dự án",
        "Đấu thầu trước là việc thực hiện các gói thầu thuộc giai đoạn chuẩn bị đầu tư",
        "Đấu thầu trước là việc lựa chọn nhà thầu không cần phê duyệt kế hoạch lựa chọn nhà thầu để đẩy nhanh tiến độ thực hiện",
        "Đấu thầu trước là việc thực hiện trước một số thủ tục trước khi dự án, dự toán mua sắm được phê duyệt nhằm mục đích đẩy nhanh tiến độ thực hiện dự án, trừ gói thầu cần thực hiện trước khi phê duyệt dự án"
      ],
      "correct": "A"
    },
    {
      "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với mua sắm trực tiếp không bao gồm bước nào sau đây?",
      "options": [
        "Thẩm định hồ sơ yêu cầu",
        "Đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu",
        "Phát hành hồ sơ yêu cầu",
        "Phê duyệt và công khai kết quả mua sắm trực tiếp"
      ],
      "correct": "A"
    },
    {
      "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với chào hàng cạnh tranh không bao gồm bước sau đây:",
      "options": [
        "Phê duyệt kết quả lựa chọn nhà thầu",
        "Công khai kết quả lựa chọn nhà thầu",
        "Thẩm định kết quả lựa chọn nhà thầu",
        "Hoàn thiện, ký kết và quản lý thực hiện hợp đồng"
      ],
      "correct": "C"
    },
    {
      "question": "Thời gian phê duyệt hồ sơ mời thầu được quy định như thế nào?",
      "options": [
        "Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu",
        "Tối đa là 05 ngày làm việc kể từ ngày tổ chuyên gia trình dự thảo hồ sơ mời thầu",
        "Tối đa là 05 ngày làm việc kể từ ngày tổ thẩm định gửi báo cáo thẩm định hồ sơ mời thầu",
        "Tối đa là 05 ngày làm việc kể từ ngày bên mời thầu trình dự thảo hồ sơ mời thầu, hồ sơ yêu cầu và tổ thẩm định có báo cáo thẩm định hồ sơ mời thầu, hồ sơ yêu cầu"
      ],
      "correct": "A"
    },
    {
      "question": "Thời gian phê duyệt kết quả lựa chọn nhà thầu được quy định như thế nào?",
      "options": [
        "Tối đa là 03 ngày làm việc kể từ ngày tổ chuyên gia trình báo cáo đánh giá hồ sơ dự thầu",
        "Tối đa là 05 ngày làm việc kể từ ngày tổ chuyên gia trình báo cáo đánh giá hồ sơ dự thầu",
        "Tối đa là 05 ngày làm việc kể từ ngày tổ thẩm định trình báo cáo thẩm định kết quả lựa chọn nhà thầu",
        "Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu và phù hợp với thời gian tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu được phê duyệt"
      ],
      "correct": "D"
    },
    {
      "question": "Thời gian đánh giá hồ sơ dự thầu được quy định như thế nào?",
      "options": [
        "Tối đa không quá 45 ngày đối với đấu thầu trong nước và không quá 60 ngày đối với đấu thầu quốc tế",
        "Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu",
        "Do người có thẩm quyền, chủ đầu tư có trách nhiệm quyết định",
        "Do chủ đầu tư quyết định trên cơ sở bảo đảm tiến độ của dự án, gói thầu và phù hợp với thời gian tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu được phê duyệt"
      ],
      "correct": "D"
    },
    {
      "question": "Danh mục hàng hóa, dịch vụ áp dụng mua sắm tập trung do Bộ trưởng Bộ Y tế ban hành:",
      "options": [
        "Danh mục mua sắm tập trung cấp quốc gia đối với ô tô trong trường hợp cần thiết",
        "Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị công nghệ thông tin trong trường hợp cần thiết",
        "Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với dịch vụ đơn giản trong trường hợp cần thiết",
        "Danh mục mua sắm tập trung cấp quốc gia đối với thuốc; danh mục mua sắm tập trung cấp quốc gia đối với thiết bị y tế, vật tư xét nghiệm trong trường hợp cần thiết"
      ],
      "correct": "D"
    },
    {
      "question": "Hình thức lựa chọn nhà thầu khi áp dụng mua sắm tập trung bảo hiểm tài sản cho các cơ quan thuộc tỉnh Y",
      "options": [
        "Đấu thầu rộng rãi.",
        "Đấu thầu hạn chế.",
        "Đàm phán giá.",
        "Đấu thầu rộng rãi và đàm phán giá."
      ],
      "correct": "A"
    },
    {
      "question": "Đơn vị mua sắm tập trung:",
      "options": [
        "Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao",
        "Thực hiện việc lựa chọn nhà thầu trên cơ sở hợp đồng ký với các đơn vị có nhu cầu",
        "Thực hiện việc lựa chọn nhà thầu trên cơ sở nhiệm vụ được giao hoặc hợp đồng ký với các đơn vị có nhu cầu",
        "Không được thực hiện việc lựa chọn nhà thầu"
      ],
      "correct": "C"
    },
    {
      "question": "Thời hạn của thỏa thuận khung:",
      "options": [
        "Thời hạn áp dụng thỏa thuận khung được quy định là 40 tháng",
        "Thời hạn áp dụng thỏa thuận khung được quy định trong kế hoạch lựa chọn nhà thầu nhưng không quá 36 tháng",
        "Thời hạn áp dụng thỏa thuận khung do người có thẩm quyền quyết định trong kế hoạch lựa chọn nhà thầu",
        "Phương án B và C đều đúng"
      ],
      "correct": "B"
    },
    {
      "question": "Tại bước hoàn thiện, ký kết và thực hiện hợp đồng với nhà thầu đối với gói thầu mua sắm tập trung:",
      "options": [
        "Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung",
        "Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước hoặc cùng thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
        "Nhà thầu đã ký kết thỏa thuận khung không phải thực hiện biện pháp bảo đảm thực hiện hợp đồng trước thời điểm hợp đồng có hiệu lực cho đơn vị có nhu cầu mua sắm",
        "Nhà thầu đã ký kết thỏa thuận khung phải thực hiện biện pháp bảo đảm thực hiện hợp đồng sau thời điểm hợp đồng có hiệu lực cho đơn vị mua sắm tập trung"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với các gói thầu mua sắm tập trung, trách nhiệm cung cấp thông tin về kết quả thực hiện hợp đồng của nhà thầu do ai thực hiện?",
      "options": [
        "Đơn vị có nhu cầu mua sắm",
        "Bên mời thầu",
        "Đơn vị tư vấn được thuê làm bên mời thầu",
        "Không phải đăng tải thông tin"
      ],
      "correct": "A"
    },
    {
      "question": "Áp dụng hình thức lựa chọn nhà thầu nào khi mua sắm tập trung đối với gói thầu điều hòa không khí thông dụng, sẵn có trên thị trường, có giá gói thầu là 03 tỷ đồng cho các cơ quan thuộc tỉnh X?",
      "options": [
        "Đấu thầu rộng rãi hoặc mua sắm trực tiếp",
        "Đấu thầu rộng rãi hoặc chỉ định thầu theo hạn mức",
        "Đấu thầu rộng rãi hoặc chào hàng cạnh tranh",
        "Đấu thầu rộng rãi hoặc chỉ định thầu hoặc đám phán giá"
      ],
      "correct": "C"
    },
    {
      "question": "Trách nhiệm trong mua sắm tập trung",
      "options": [
        "Đơn vị mua sắm tập trung thực hiện trách nhiệm của người có thẩm quyền theo quy định của Luật Đấu thầu",
        "Đơn vị mua sắm tập trung thực hiện trách nhiệm của chủ đầu tư theo quy định của Luật Đấu thầu",
        "Đơn vị mua sắm tập trung thực hiện trách nhiệm của bên mời thầu theo quy định của Luật Đấu thầu",
        "Đơn vị mua sắm tập trung thực hiện trách nhiệm của tổ chuyên gia theo quy định của Luật Đấu thầu"
      ],
      "correct": "B"
    },
    {
      "question": "Nhà thầu đã ký thỏa thuận khung và được đơn vị có nhu cầu mua sắm yêu cầu ký hợp đồng nhưng không ký hợp đồng, không thực hiện biện pháp bảo đảm thực hiện hợp đồng sẽ bị xử lý như thế nào?",
      "options": [
        "Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị có nhu cầu mua sắm công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
        "Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 06 tháng kể từ ngày đơn vị mua sắm tập trung công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia, trừ trường hợp bất khả kháng",
        "Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của đơn vị có nhu cầu mua sắm, trừ trường hợp bất khả kháng",
        "Nhà thầu sẽ bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong thời hạn trong thời hạn 06 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của đơn vị có nhu cầu mua sắm, trừ trường hợp bất khả kháng"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ theo khả năng cung cấp và áp dụng phương pháp giá thấp nhất, việc lựa chọn danh sách nhà thầu trúng thầu được thực hiện như thế nào?",
      "options": [
        "Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu tối thiểu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu tốt nhất",
        "Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu cao nhất",
        "Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đề nghị trúng thầu của gói thầu thấp nhất",
        "Phải đảm bảo tổng số lượng hàng hóa mà các nhà thầu trúng thầu chào thầu bằng số lượng hàng hóa nêu trong hồ sơ mời thầu, đồng thời bảo đảm tổng giá đánh giá của gói thầu là thấp nhất"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với gói thầu mua sắm tập trung áp dụng lựa chọn nhà thầu căn cứ khối lượng mời thầu, danh sách phê duyệt nhà thầu trúng thầu bao gồm:",
      "options": [
        "Danh sách chính (nhà thầu xếp thứ nhất) và danh sách dự bị (nhà thầu xếp thứ 2 trở đi)",
        "Danh sách chính (nhà thầu xếp thứ nhất) và danh sách nhà thầu không đáp ứng yêu cầu của hồ sơ mời thầu",
        "Danh sách các nhà thầu đáp ứng yêu cầu về năng lực và kinh nghiệm theo yêu cầu của hồ sơ mời thầu",
        "Danh sách chính (nhà thầu xếp thứ nhất và nhà thầu xếp thứ 2) và danh sách dự bị (nhà thầu xếp thứ 3 trở đi)"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với hàng hóa, dịch vụ không thuộc danh mục mua sắm tập trung do Chủ tịch UBND tỉnh X ban hành nhưng nhiều cơ quan, tổ chức, đơn vị trong tỉnh X có nhu cầu mua sắm hàng hóa, dịch vụ cùng loại thì thực hiện như thế nào?",
      "options": [
        "Từng cơ quan, tổ chức, đơn vị trong tỉnh X căn cứ vào thỏa thuận khung do UBND tỉnh X đã ký kết trước đó để mua sắm tập trung đối với các hàng hóa, dịch vụ này",
        "Có thể gộp thành một gói thầu để một trong các cơ quan, tổ chức, đơn vị mua sắm hoặc để đơn vị có chức năng mua sắm tập trung thực hiện việc mua sắm đối với các hàng hóa, dịch vụ này",
        "Sở Tài chính thuộc tỉnh X có trách nhiệm thực hiện mua sắm tập trung đối với các hàng hóa, dịch vụ này",
        "Các cơ quan, tổ chức, đơn vị báo cáo lên người có thẩm quyền để phê duyệt kế hoạch chọn nhà thầu theo hình thức mua sắm tập trung đối với các hàng hóa, dịch vụ này"
      ],
      "correct": "B"
    },
    {
      "question": "Thẩm quyền phê duyệt kế hoạch tổng thể lựa chọn nhà thầu thuộc chủ thể nào?",
      "options": [
        "Người có thẩm quyền",
        "Chủ đầu tư (trường hợp xác định được chủ đầu tư)",
        "Người đứng đầu cơ quan được giao chuẩn bị dự án",
        "Bên mời thầu"
      ],
      "correct": "A"
    },
    {
      "question": "Trường hợp thuê đơn vị tư vấn lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu; đánh giá hồ sơ quan tâm, hồ sơ dự sơ tuyển, hồ sơ dự thầu, hồ sơ đề xuất, tổ chuyên gia được thành lập bởi?",
      "options": [
        "Người có thẩm quyền",
        "Chủ đầu tư",
        "Bên mời thầu",
        "Đơn vị tư vấn được chủ đầu tư lựa chọn"
      ],
      "correct": "D"
    },
    {
      "question": "Nhiệm vụ nào sau đây không thuộc trách nhiệm của người có thẩm quyền?",
      "options": [
        "Phê duyệt kế hoạch lựa chọn nhà thầu",
        "Giải quyết kiến nghị và xử lý các vi phạm pháp luật về đấu thầu",
        "Quyết định việc hủy thầu khi thay đổi mục tiêu đầu tư trong quyết định đầu tư",
        "Quyết định việc hủy thầu, đình chỉ cuộc đấu thầu, không công nhận kết quả lựa chọn nhà thầu khi phát hiện có hành vi vi phạm pháp luật về đấu thầu"
      ],
      "correct": "D"
    },
    {
      "question": "Trường hợp nào sau đây việc phê duyệt kế hoạch lựa chọn nhà thầu thuộc trách nhiệm của chủ đầu tư?",
      "options": [
        "Chủ đầu tư không có trách nhiệm phê duyệt kế hoạch lựa chọn nhà thầu",
        "Trong tất cả trường hợp trừ trường hợp gói thầu được thực hiện trước khi có quyết định phê duyệt dự án và chưa xác định được chủ đầu tư",
        "Trường hợp gói thầu được thực hiện trước khi có quyết định phê duyệt dự án và chưa xác định được chủ đầu tư",
        "Tất cả phương án trên đều sai"
      ],
      "correct": "B"
    },
    {
      "question": "Việc chấp thuận hoặc không chấp thuận việc điều chuyển khối lượng, phạm vi công việc của nhà thầu phụ cho tổ chức, đơn vị khác khi cần đáp ứng yêu cầu về tiến độ, chất lượng gói thầu khi nhà thầu chính đề xuất thuộc trách nhiệm của ai?",
      "options": [
        "Tổ chuyên gia",
        "Chủ đầu tư",
        "Người có thẩm quyền",
        "Tổ thẩm định"
      ],
      "correct": "B"
    },
    {
      "question": "Nội dung nào không thuộc nội dung quản lý nhà nước đối với hoạt động đấu thầu?",
      "options": [
        "Quản lý hệ thống thông tin và cơ sở dữ liệu về đấu thầu trên phạm vi cả nước.",
        "Lập hồ sơ mời quan tâm, hồ sơ mời sơ tuyển, hồ sơ mời thầu, hồ sơ yêu cầu.",
        "Đào tạo, bồi dưỡng kiến thức, nghiệp vụ chuyên môn về đấu thầu.",
        "Hợp tác quốc tế về đấu thầu"
      ],
      "correct": "B"
    },
    {
      "question": "Theo quy định pháp luật về đấu thầu, kiểm tra hoạt động đấu thầu được tiến hành theo hình thức nào?",
      "options": [
        "Kiểm tra trực tiếp",
        "Báo cáo bằng văn bản",
        "Kết hợp giữa kiểm tra trực tiếp và báo cáo bằng văn bản",
        "Kiểm tra định kỳ hoặc đột xuất"
      ],
      "correct": "D"
    },
    {
      "question": "Thời hiệu áp dụng biện pháp cấm tham gia hoạt động đấu thầu là bao lâu?",
      "options": [
        "10 năm tính từ ngày xảy ra hành vi vi phạm",
        "10 năm tính từ ngày phát hiện ra hành vi vi phạm",
        "05 năm tính từ ngày phát hiện ra hành vi vi phạm",
        "05 năm tính từ ngày xảy ra hành vi vi phạm"
      ],
      "correct": "A"
    },
    {
      "question": "Chủ thể nào không có quyền cấm tham gia hoạt động đấu thầu?",
      "options": [
        "Người có thẩm quyền",
        "Chủ đầu tư",
        "Bộ trưởng, Thủ trưởng cơ quan ngang Bộ, cơ quan thuộc Chính phủ, cơ quan khác ở Trung ương",
        "Chủ tịch Ủy ban nhân dân cấp tỉnh"
      ],
      "correct": "B"
    },
    {
      "question": "Người có thẩm quyền ban hành quyết định cấm tham gia hoạt động đấu thầu với thời gian cấm bao lâu đối với trường hợp tổ chức, cá nhân có từ 02 hành vi vi phạm trở lên thuộc cùng phạm vi quản lý của người có thẩm quyền và các hành vi này chưa bị cấm tham gia hoạt động đấu thầu?",
      "options": [
        "Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối thiểu trên 05 năm",
        "Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 03 năm",
        "Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 05 năm",
        "Bằng thời gian cấm của hành vi vi phạm có thời gian bị cấm cao nhất"
      ],
      "correct": "C"
    },
    {
      "question": "Hành vi gian lận trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
      "options": [
        "Từ 06 tháng đến 01 năm",
        "02 năm",
        "Từ 01 năm đến 02 năm",
        "Từ 03 năm đến 05 năm"
      ],
      "correct": "D"
    },
    {
      "question": "Hành vi cản trở trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
      "options": [
        "06 tháng",
        "Từ 06 tháng đến dưới 1 năm",
        "Từ 01 năm đến 03 năm",
        "05 năm"
      ],
      "correct": "C"
    },
    {
      "question": "Thành viên A trong nhà thầu liên danh A-B thực hiện hành vi \"làm giả hoặc làm sai lệch thông tin, hồ sơ, tài liệu trong đấu thầu\" thì việc cấm tham gia hoạt động đấu thầu được xử lý như thế nào?",
      "options": [
        "Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với thành viên A",
        "Cấm tham gia hoạt động đấu thầu từ 01 năm đến dưới 03 năm đối với thành viên A",
        "Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
        "Cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm đối với tất cả thành viên trong nhà thầu liên danh A-B"
      ],
      "correct": "A"
    },
    {
      "question": "Đình chỉ cuộc thầu được thực hiện trong thời gian nào?",
      "options": [
        "Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
        "Trong quá trình tổ chức lựa chọn nhà thầu cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu",
        "Sau khi phê duyệt kết quả lựa chọn nhà thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
        "Trong quá trình thực hiện hợp đồng"
      ],
      "correct": "B"
    },
    {
      "question": "Biện pháp nào sau đây được thực hiện trong quá trình thực hiện hợp đồng?",
      "options": [
        "Hủy thầu",
        "Đình chỉ cuộc thầu",
        "Không công nhận kết quả lựa chọn nhà thầu",
        "Phương án A và B đều đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với việc giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
      "options": [
        "Chủ đầu tư, người có thẩm quyền",
        "Chủ đầu tư, Hội đồng giải quyết kiến nghị",
        "Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
        "Chủ đầu tư, tổ chuyên gia"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với việc giải quyết kiến nghị về kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
      "options": [
        "Chủ đầu tư, người có thẩm quyền",
        "Chủ đầu tư, Hội đồng giải quyết kiến nghị",
        "Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
        "Chủ đầu tư, tổ chuyên gia"
      ],
      "correct": "B"
    },
    {
      "question": "Trường hợp đang trong quá trình giải quyết kiến nghị mà nhà thầu gửi đơn khiếu nại thì việc giải quyết kiến nghị được xử lý thế nào",
      "options": [
        "Tiếp tục giải quyết kiến nghị",
        "Chấm dứt ngay việc giải quyết kiến nghị",
        "Tạm dừng việc giải quyết kiến nghị đến khi có kết quả giải quyết khiếu nại",
        "Tất cả phương án trên đều sai"
      ],
      "correct": "B"
    },
    {
      "question": "Chi phí giải quyết kiến nghị được nhà thầu nộp cho chủ thể nào sau đây?",
      "options": [
        "Chủ tịch Hội đồng tư vấn giải quyết kiến nghị",
        "Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị",
        "Chủ đầu tư",
        "Người có thẩm quyền"
      ],
      "correct": "B"
    },
    {
      "question": "Các trường hợp nào sau đây nhà thầu không được hoàn trả chi phí giải quyết kiến nghị",
      "options": [
        "Kiến nghị của nhà thầu được kết luận là đúng",
        "Một hoặc các nội dung kiến nghị của nhà thầu được kết luận là không đúng",
        "Nhà thầu rút đơn kiến nghị trong quá trình giải quyết kiến nghị",
        "Phương án B và C đều đúng"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với kiến nghị về kết quả lựa chọn nhà thầu, Hội đồng giải quyết kiến nghị phải có văn bản giải quyết kiến nghị trong thời hạn bao nhiêu ngày kể từ ngày Hội đồng được thành lập?",
      "options": [
        "25 ngày",
        "30 ngày",
        "35 ngày",
        "20 ngày"
      ],
      "correct": "B"
    },
    {
      "question": "Phương án nào sau đây là đúng trong việc giải quyết kiến nghị đối với gói thầu sử dụng vốn sản xuất kinh doanh của doanh nghiệp nhà nước?",
      "options": [
        "Hội đồng giải quyết kiến nghị do Sở Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
        "Hội đồng giải quyết kiến nghị do Bộ trưởng Bộ Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
        "Người đứng đầu doanh nghiệp nhà nước tự ban hành điều kiện, quy trình về giải quyết kiến nghị trong đơn vị mình",
        "Tất cả phương án A, B, C đều sai"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến người có thẩm quyền và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
      "options": [
        "Người có thẩm quyền",
        "Chủ đầu tư",
        "Bộ phận thường trực",
        "Hội đồng giải quyết kiến nghị"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với kiến nghị về kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến bộ phận thường trực và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
      "options": [
        "Người có thẩm quyền",
        "Chủ đầu tư",
        "Bộ phận thường trực",
        "Hội đồng giải quyết kiến nghị"
      ],
      "correct": "D"
    },
    {
      "question": "Đơn vị sự nghiệp công lập (tự chủ chi thường xuyên và chi đầu tư) thuộc tỉnh B tổ chức đấu thầu cho dự án sử dụng vốn ngân sách nhà nước thì Giám đốc Sở Tài chính Tỉnh B có trách nhiệm thành lập Hội đồng giải quyết kiến nghị cho gói thầu có kiến nghị tại Dự án này hay không?",
      "options": [
        "Có trách nhiệm thành lập",
        "Không có trách nhiệm thành lập",
        "Thành lập khi chủ tịch UBND tỉnh yêu cầu",
        "Thành lập khi Giám đốc doanh nghiệp A đề nghị"
      ],
      "correct": "A"
    },
    {
      "question": "Hội đồng giải quyết kiến nghị có quyền thực hiện việc nào sau đây?",
      "options": [
        "Hủy thầu",
        "Yêu cầu chủ đầu tư tạm dừng ký kết hợp đồng",
        "Yêu cầu nhà thầu, chủ đầu tư và các cơ quan liên quan cung cấp thông tin của gói thầu, dự án và các thông tin liên quan khác để thực hiện nhiệm vụ",
        "Không công nhận kết quả lựa chọn nhà thầu"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với kiến nghị về quá trình tổ chức lựa chọn nhà thầu (không phải kiến nghị về nội dung hồ sơ mời thầu), đơn kiến nghị phải là của chủ thể nào?",
      "options": [
        "Cá nhân quan tâm đến gói thầu",
        "Nhà thầu tham dự thầu",
        "Cơ quan, tổ chức quan tâm đến gói thầu",
        "Phương án B và C đều đúng"
      ],
      "correct": "B"
    },
    {
      "question": "Các tài liệu, thông tin nào sau đây trong việc giải quyết kiến nghị được công khai trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "Nội dung kiến nghị kết quả lựa chọn nhà thầu",
        "Văn bản giải quyết kiến nghị của chủ đầu tư",
        "Văn bản giải quyết kiến nghị của người có thẩm quyền",
        "Tất cả phương án trên đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Nhà thầu có trách nhiệm nộp chi phí giải quyết kiến nghị trong thời hạn bao lâu kể từ ngày nhận được thông báo của bộ phận thường trực?",
      "options": [
        "03 ngày làm việc",
        "02 ngày làm việc",
        "04 ngày làm việc",
        "05 ngày làm việc"
      ],
      "correct": "B"
    },
    {
      "question": "Trường hợp hồ sơ mời thầu cho phép nhà thầu đề xuất biện pháp thi công khác với biện pháp thi công nêu trong hồ sơ mời thầu thì phần sai khác giữa khối lượng công việc theo biện pháp thi công nêu trong hồ sơ mời thầu và khối lượng công việc theo biện pháp thi công do nhà thầu đề xuất được xem xét thế nào?",
      "options": [
        "Bị hiệu chỉnh sai lệch, phần sai khác được tính là sai lệch thừa",
        "Không bị hiệu chỉnh sai lệch, phần sai khác không được tính là sai lệch thừa",
        "Bị hiệu chỉnh sai lệch, phần sai khác được tính là sai lệch thiếu",
        "Không bị hiệu chỉnh sai lệch, phần sai khác không bị tính là sai lệch thiếu"
      ],
      "correct": "D"
    },
    {
      "question": "Trường hợp hồ sơ dự thầu có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá (nếu có) thấp khác thường thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng tối đa là bao nhiêu để đề phòng rủi ro?",
      "options": [
        "30% giá hợp đồng",
        "35% giá hợp đồng",
        "40% giá hợp đồng",
        "45% giá hợp đồng"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với gói thầu chia phần, chủ đầu tư có thể phê duyệt kết quả lựa chọn nhà thầu cho từng phần hay không?",
      "options": [
        "Không thể",
        "Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá gói thầu",
        "Có thể nhưng phải bảo đảm tỷ lệ tiết kiệm tối thiểu 5%",
        "Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá của phần đó trong giá gói thầu"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với gói thầu chia phần, trường hợp một phần của gói thầu không có nhà thầu tham dự thầu thì chủ đầu tư xử lý thế nào?",
      "options": [
        "Tách phần đó ra thành gói thầu riêng biệt để tổ chức lựa chọn nhà thầu theo quy định",
        "Hủy thầu",
        "Đàm phán với nhà thầu trúng thầu của phần khác để thực hiện",
        "Phương án B và C đều đúng"
      ],
      "correct": "A"
    },
    {
      "question": "Thẩm quyền xử lý tình huống phức tạp trong đấu thầu?",
      "options": [
        "Chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền",
        "Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của Tổ chuyên gia",
        "Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư",
        "Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư và Tổ chuyên gia"
      ],
      "correct": "A"
    },
    {
      "question": "Trường hợp một hoặc một số thành viên liên danh vi phạm hợp đồng, không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu thì việc đánh giá uy tín của nhà thầu trong việc thực hiện hợp đồng được xử lý như nào?",
      "options": [
        "Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
        "Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
        "Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
        "Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia"
      ],
      "correct": "B"
    },
    {
      "question": "Trường hợp phải chấm dứt hợp đồng với nhà thầu vi phạm hợp đồng để thay thế nhà thầu mới thì phần công việc chưa thực hiện được áp dụng hình thức chỉ định thầu cho nhà thầu khác với giá trị được tính như nào?",
      "options": [
        "Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
        "Bằng giá trị ghi trong hợp đồng được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
        "Bằng giá trị của phần công việc còn lại được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu",
        "Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện trước đó theo dự toán được duyệt"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với nhà thầu liên danh, trường hợp trong quá trình thực hiện hợp đồng cần đẩy nhanh tiến độ thực hiện so với hợp đồng đã ký (cần sửa đổi hợp đồng) thì cần thực hiện như thế nào?",
      "options": [
        "Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và không phải thông báo cho chủ đầu tư",
        "Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và thông báo cho chủ đầu tư",
        "Phải được người có thẩm quyền cho phép chủ đầu tư và nhà thầu thỏa thuận, điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
        "Chủ đầu tư và nhà thầu được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn"
      ],
      "correct": "D"
    },
    {
      "question": "Trường hợp nhà thầu có nhân sự (ký kết hợp đồng lao động với nhà thầu tại thời điểm nhân sự thực hiện hành vi vi phạm) bị cơ quan điều tra kết luận có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng theo quy định pháp luật về hình sự nhằm mục đích cho nhà thầu trúng thầu nhưng nhân sự của nhà thầu chưa bị Tòa án kết án hoặc nhà thầu chưa bị người có thẩm quyền ra quyết định cấm tham gia hoạt động đấu thầu thì tại thời điểm này nhà thầu\ncó được tham dự thầu hay không?",
      "options": [
        "Nhà thầu không được tham dự thầu",
        "Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu sẽ được mở nhưng không được xem xét, đánh giá",
        "Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu không được mở thầu và trả lại theo nguyên trạng",
        "Nhà thầu vẫn được tiếp tục tham dự thầu"
      ],
      "correct": "D"
    },
    {
      "question": "Trường hợp nào là một trong những điều kiện để chủ đầu tư chấp thuận đề xuất của nhà thầu trong quá trình thực hiện hợp đồng về việc thay đổi các hàng hóa có phiên bản sản xuất, năm sản xuất mới hơn so với hàng hóa ghi trong hợp đồng?",
      "options": [
        "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng bắt buộc phải cùng hãng sản xuất và xuất xứ",
        "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng hãng sản xuất nhưng không bắt buộc cùng xuất xứ",
        "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng xuất xứ nhưng không bắt buộc cùng hãng sản xuất",
        "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng không bắt buộc cùng hãng sản xuất và cùng xuất xứ"
      ],
      "correct": "A"
    },
    {
      "question": "Trường hợp gói thầu có tính chất đặc thù và áp dụng hình thức chỉ định thầu hoặc lựa chọn nhà thầu trong trường hợp đặc biệt, nhà thầu nước ngoài có yêu cầu ràng buộc chỉ ký hợp đồng khi không phải đăng ký trên Hệ thống mạng đấu thầu quốc gia thì chủ đầu tư xử lý như thế nào?",
      "options": [
        "Không cần yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
        "Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
        "Nhà thầu không được chấp nhận và bị loại",
        "Hủy thầu"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với trường hợp hủy thầu thì phải thực hiện giải pháp nào sau đây?",
      "options": [
        "Phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
        "Phải điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu",
        "Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
        "Tất cả các đáp án trên đều không đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Hủy thầu được thực hiện trong thời gian nào?",
      "options": [
        "Từ ngày có thời điểm đóng thầu đến khi có kết quả lựa chọn nhà thầu",
        "Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
        "Từ ngày có thời điểm đóng thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
        "Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trường hợp trong quá trình đánh giá E-HSDT mà chưa có kết quả lựa chọn nhà thầu, nhà thầu có tên trong biên bản mở thầu bị khóa tài khoản theo quy định của pháp luật về đấu thầu thì chủ đầu tư xử lý như thế nào?",
      "options": [
        "Yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản làm cơ sở xem xét, đánh giá E-HSDT của nhà thầu",
        "Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
        "Không tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
        "Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với gói thầu xây lắp, dịch vụ phi tư vấn, dịch vụ tư vấn áp dụng đấu thầu trước quy định tại Điều 42 của Luật Đấu thầu, trường hợp dự án được phê duyệt có các nội dung dẫn đến tăng giá gói thầu (hoặc tăng dự toán nếu dự toán được phê duyệt sau khi phê duyệt kế hoạch lựa chọn nhà thầu) từ 30% trở lên hoặc thay đổi tiêu chuẩn đánh giá quan trọng về kỹ thuật hoặc thay đổi cấp công trình quy định trong hồ sơ mời thầu đã phát hành thì chủ đầu tư xử lý như\nthế nào?",
      "options": [
        "Tiếp tục đánh giá hồ sơ dự thầu trong trường hợp đã mở thầu",
        "Được sửa đổi và phát hành bổ sung hồ sơ mời thầu trong trường hợp chưa mở thầu",
        "Được sửa đổi, bổ sung khối lượng công việc, hoàn thiện để ký kết hợp đồng với nhà thầu",
        "Hủy thầu"
      ],
      "correct": "D"
    },
    {
      "question": "Trường hợp nhà thầu trúng thầu không tiến hành hoàn thiện, ký kết hợp đồng hoặc tại thời điểm ký kết hợp đồng, nhà thầu trúng thầu không đáp ứng yêu cầu về năng lực kỹ thuật, tài chính quy định tại khoản 2 Điều 66 của Luật Đấu thầu thì chủ đầu tư xử lý như thế nào trong trường hợp này?",
      "options": [
        "Hủy quyết định phê duyệt kết quả lựa chọn nhà thầu trúng thầu",
        "Hủy thầu",
        "Không công nhận kết quả lựa chọn nhà thầu",
        "Đình chỉ cuộc thầu"
      ],
      "correct": "A"
    },
    {
      "question": "Trường hợp nào dưới đây, chủ đầu tư và nhà thầu liên danh được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh?",
      "options": [
        "Khi một thành viên liên danh không muốn tiếp tục thực hiện phần việc đã cam kết",
        "Khi chủ đầu tư thấy một thành viên trong liên danh thực hiện tốt nên muốn điều chuyển toàn bộ phần việc cho thành viên liên danh đó",
        "Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ",
        "Khi một thành viên liên danh đề nghị chuyển nhượng phần việc để tiết kiệm chi phí"
      ],
      "correct": "C"
    },
    {
      "question": "Gói thầu EC có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá bằng 85% giá gói thầu thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng ở mức 15% hay không?",
      "options": [
        "Không được quy định",
        "Có thể quy định nhưng phải được sự đồng ý của nhà thầu",
        "Do chủ đầu tư quyết định để ngừa rủi ro cho quá trình thực hiện",
        "Có thể quy định nhưng phải được người có thẩm quyền chấp thuận"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với gói thầu hỗn hợp, có yêu cầu đặc thù về kỹ thuật chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu áp dụng bước thương thảo hợp đồng, trường hợp nhà thầu xếp hạng thứ nhất (danh sách xếp hạng có 03 nhà thầu) không tiến hành thương thảo, không ký biên bản thương thảo, thương thảo không thành công thì chủ đầu tư thực hiện bước tiếp theo như thế nào?",
      "options": [
        "Mời nhà thầu xếp hạng tiếp theo vào thương thảo hợp đồng",
        "Hủy thầu",
        "Cho phép các nhà thầu còn lại chào lại giá dự thầu",
        "Mời nhà thầu xếp hạng tiếp theo vào hoàn thiện hợp đồng"
      ],
      "correct": "A"
    },
    {
      "question": "Nhận định nào sau đây đúng về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
        "Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
        "Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
        "Cả 3 phương án trên đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Tài khoản nghiệp vụ trên Hệ thống mạng đấu thầu quốc gia là gì?",
      "options": [
        "Tài khoản do người sử dụng đăng ký và được phê duyệt trên Hệ thống mạng đấu thầu quốc gia",
        "Tài khoản do Trung tâm Đấu thầu qua mạng quốc gia cấp phép theo quy định",
        "Tài khoản do Tài khoản tham gia hệ thống tạo ra",
        "Phương án A và B đều đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Nhà thầu có trách nhiệm kê khai thông tin nào trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "Thông tin về uy tín của nhà thầu trong việc tham dự thầu",
        "Thông tin về vi phạm của nhà thầu",
        "Thông tin về năng lực, kinh nghiệm của nhà thầu",
        "Cả 3 phương án trên đều đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Ai chịu trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "Bên mời thầu",
        "Tổ chuyên gia",
        "Tư vấn đấu thầu",
        "Chủ đầu tư"
      ],
      "correct": "D"
    },
    {
      "question": "Trong đấu thầu qua mạng, nhà thầu tư vấn đấu thầu bị khoá tài khoản trong vòng 06 tháng khi thực hiện hành vi nào sau đây?",
      "options": [
        "Tham gia vào quá trình lập và đánh giá E-HSMT",
        "Tham gia vào quá trình thẩm định hồ sơ mời thầu và kết quả lựa chọn nhà thầu",
        "Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
        "Đăng tải thông tin về năng lực, kinh nghiệm của mình trên Hệ thống mạng đấu thầu quốc gia"
      ],
      "correct": "C"
    },
    {
      "question": "Chủ đầu tư có trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống đấu thầu qua mạng quốc gia chậm nhất là?",
      "options": [
        "05 ngày làm việc kể từ ngày ký kết hợp đồng",
        "05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
        "05 ngày kể từ ngày hợp đồng có hiệu lực",
        "05 ngày làm việc kể từ ngày nhà thầu nộp bảo đảm thực hiện hợp đồng"
      ],
      "correct": "B"
    },
    {
      "question": "Danh sách nhà thầu có hành vi vi phạm và bị đánh giá về uy tín được đăng tải trên Hệ thống mạng đấu thầu quốc gia như thế nào?",
      "options": [
        "Tổ chuyên gia đăng tải trong thời hạn 03 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
        "Bên mời thầu đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
        "Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
        "Người có thẩm quyền đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm"
      ],
      "correct": "C"
    },
    {
      "question": "Chủ thể nào sau đây được gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "Người có thẩm quyền",
        "Chủ đầu tư",
        "Tổ chuyên gia",
        "Tư vấn đấu thầu"
      ],
      "correct": "B"
    },
    {
      "question": "Chọn phương án đúng về thời gian áp dụng mua sắm trực tuyến đối với các hạng mục trong danh mục hàng hóa, dịch vụ mua sắm tập trung?",
      "options": [
        "Thời gian áp dụng là thời gian thực hiện hợp đồng trong trường hợp không ký thỏa thuận khung nhưng không quá 24 tháng kể từ ngày hợp đồng có hiệu lực hoặc thời gian có hiệu lực của thỏa thuận khung",
        "Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong trường hợp hợp đồng, thỏa thuận khung chưa được công khai",
        "Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia",
        "Phương án A và B đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Công việc nào sau đây phải thực hiện trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "Lập E-HSMT",
        "Trình phê duyệt E-HSMT, phê duyệt E-HSMT",
        "Phê duyệt kết quả lựa chọn nhà thầu",
        "Tất cả các phương án trên đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với đấu thầu qua mạng, việc trả lời yêu cầu làm rõ E-HSMT được thực hiện theo phương án nào?",
      "options": [
        "Do tổ chuyên gia thực hiện bằng văn bản",
        "Do tổ chuyên gia thực hiện trên Hệ thống mạng đấu thầu quốc gia",
        "Do tư vấn đấu thầu thực hiện bằng tài khoản của đơn vị tư vấn",
        "Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với gói thầu đấu thầu qua mạng, trường hợp sửa đổi E-HSMT sau khi phát hành, chủ đầu tư phải đăng tải tài liệu nào sau đây trên Hệ thống?",
      "options": [
        "Quyết định sửa đổi kèm theo những nội dung sửa đổi E-HSMT",
        "E-HSMT đã được sửa đổi",
        "Báo cáo thẩm định E-HSMT sửa đổi",
        "Phương án A và B đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Nhà thầu không phải đính kèm thư bảo lãnh (hoặc giấy chứng nhận bảo hiểm bảo lãnh) mà chỉ phải cam kết trong đơn dự thầu đối với gói thầu xây lắp khi nào?",
      "options": [
        "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 40 triệu đồng",
        "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
        "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 60 triệu đồng",
        "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 100 triệu đồng"
      ],
      "correct": "A"
    },
    {
      "question": "Bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh trong đấu thầu qua mạng được nộp như thế nào?",
      "options": [
        "Gửi qua email đến Tổ trưởng Tổ chuyên gia",
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
        "Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
        "Các phương án trên đều sai"
      ],
      "correct": "B"
    },
    {
      "question": "Đối với đấu thầu qua mạng, việc làm rõ E-HSDT giữa Chủ đầu tư và nhà thầu có E-HSDT cần phải làm rõ được thực hiện như thế nào?",
      "options": [
        "Chủ đầu tư được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm, không được làm rõ đối với yêu cầu về kỹ thuật, tài chính",
        "Chủ đầu tư được làm rõ đối với yêu cầu về kỹ thuật, tài chính, không được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm",
        "Chủ đầu tư dành cho nhà thầu tối đa 03 ngày để nhà thầu thực hiện việc làm rõ E-HSDT",
        "Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-HSDT"
      ],
      "correct": "D"
    },
    {
      "question": "File đính kèm  nào sau đây của nhà thầu nộp trên Hệ thống mạng đấu thầu quốc gia không được xem xét, đánh giá?",
      "options": [
        "Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows",
        "Các file sử dụng phông chữ thuộc bảng mã Unicode",
        "Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows hoặc phần mềm giải nén Rar hoặc 7Zip",
        "Các file bị nhiễm virus, bị lỗi, hỏng"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với đấu thầu qua mạng, nội dung nào sau đây do Hệ thống tự động đánh giá?",
      "options": [
        "Bảo đảm dự thầu",
        "Thoả thuận liên danh đối với nhà thầu liên danh",
        "Doanh thu bình quân 3 năm gần nhất của nhà thầu",
        "Các đáp án trên đều đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với đấu thầu qua mạng, nội dung đánh giá kết quả hoạt động tài chính nào sau đây là đúng?",
      "options": [
        "Đối với số liệu về kết quả hoạt động tài chính từ 2021 trở đi, Hệ thống đánh giá căn cứ thông tin được trích xuất hoặc thông tin do nhà thầu cập nhật",
        "Đối với số liệu về kết quả hoạt động tài chính trước năm 2021, hệ thống đánh giá căn cứ thông tin do nhà thầu kê khai",
        "Đối với nhà thầu là hộ kinh doanh, không đánh giá tiêu chí kết quả hoạt động tài chính",
        "Tất cả phương án trên đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với đấu thầu rộng rãi qua mạng, một số nội dung do Hệ thống mạng đấu thầu quốc gia đánh giá \"không đạt\" thì Tổ chuyên gia không thể sửa đổi kết quả đánh giá từ \"không đạt\" thành \"đạt\". Phương án nào sau đây là đúng?",
      "options": [
        "Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, doanh thu bình quân hằng năm.",
        "Tư cách hợp lệ, bảo đảm dự thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
        "Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
        "Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, lịch sử không hoàn thành hợp đồng do lỗi của nhà thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm"
      ],
      "correct": "D"
    },
    {
      "question": "Quy trình 02 trong đánh giá E-HSDT được áp dụng đối với gói thầu nào sau đây?",
      "options": [
        "Gói thầu mua sắm hàng hóa áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E- HSDT đều không có bất kỳ ưu đãi nào",
        "Gói thầu dịch vụ phi tư vấn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá đánh giá” và các nhà thầu, E- HSDT chào ưu đãi như nhau",
        "Gói thầu xây lắp áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
        "Gói thầu máy đặt, máy mượn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E- HSDT chào ưu đãi như nhau"
      ],
      "correct": "A"
    },
    {
      "question": "Chủ đầu tư yêu cầu gia hạn hiệu lực hồ sơ dự thầu, bảo đảm dự thầu trong trường hợp nào sau đây?",
      "options": [
        "Trước khi hết hạn hiệu lực hồ sơ dự thầu trong trường hợp cần gia hạn để tiếp tục đánh giá hồ sơ dự thầu",
        "Trường hợp nhà thầu xếp hạng tiếp theo được mời vào thương thảo hợp đồng nhưng hồ sơ dự thầu của nhà thầu đó hết hiệu lực thì Chủ đầu tư phải yêu cầu nhà thầu gia hạn hiệu lực của hồ sơ dự thầu, bảo đảm dự thầu trước khi thương thảo hợp đồng",
        "Trước khi phê duyệt kết quả lựa chọn nhà thầu",
        "Phương án A và B đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Trong quá trình đánh giá, Tổ chuyên gia phát hiện nhà thầu tham dự thầu trên Hệ thống mạng đấu thầu quốc gia đính kèm tệp tin có thiết lập mật khẩu thì xử lý thế nào?",
      "options": [
        "Yêu cầu nhà thầu nộp lại tệp tin không có thiết lập mật khẩu trên Hệ thống mạng đấu thầu quốc gia để xem xét, đánh giá",
        "Yêu cầu nhà thầu cung cấp mật khẩu để xem xét, đánh giá",
        "Tệp tin này không được xem xét, đánh giá",
        "Phương án A và B đều đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Theo quy định tại Thông tư số 79/2025/TT-BTC, quy định về thời điểm bắt đầu và kết thúc chào giá trực tuyến theo quy trình rút gọn?",
      "options": [
        "Thời điểm bắt đầu và kết thúc phải trong giờ hành chính.",
        "Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
        "Thời điểm bắt đầu và kết thúc không bắt buộc trong giờ hành chính.",
        "Tất cả phương án trên đều sai"
      ],
      "correct": "A"
    },
    {
      "question": "Đối với gói thầu chào giá trực tuyến rút gọn, nhà thầu xác nhận về việc chấp thuận được trao hợp đồng trong thời gian tối đa bao lâu kể từ ngày chủ đầu tư mời nhà thầu xác nhận trên Hệ thống mạng đấu thầu quốc gia?",
      "options": [
        "03 ngày",
        "03 ngày làm việc",
        "05 ngày",
        "05 ngày làm việc"
      ],
      "correct": "B"
    },
    {
      "question": "Gói thầu chào giá trực tuyến rút gọn, trường hợp nhà thầu từ chối hoặc không xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia thì nội dung nào sau đây không đúng?",
      "options": [
        "Công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
        "Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của chủ đầu tư",
        "Khóa chức năng chào giá trực tuyến trong thời hạn 06 tháng kể từ ngày chủ đầu tư công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
        "Bị đánh giá về uy tín trong việc tham dự thầu"
      ],
      "correct": "C"
    },
    {
      "question": "Chào giá trực tuyến theo quy trình thông thường áp dụng đối với gói thầu nào sau đây?",
      "options": [
        "Dịch vụ phi tư vấn thông dụng, đơn giản",
        "Xây lắp",
        "Dịch vụ tư vấn",
        "Hỗn hợp"
      ],
      "correct": "A"
    },
    {
      "question": "Nhà thầu phải thực hiện xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia đối với các hình thức lựa chọn nhà thầu qua mạng nào?",
      "options": [
        "Đấu thầu rộng rãi, chào hàng cạnh tranh, đấu thầu hạn chế.",
        "Chào giá trực tuyến theo quy trình thông thường",
        "Chào giá trực tuyến theo quy trình rút gọn",
        "Các phương án trên đều đúng"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với chào giá trực tuyến rút gọn, kể từ lượt chào giá thứ hai, giá chào của nhà thầu không được thấp hơn giá thấp nhất hiển thị trên Hệ thống mạng đấu thầu quốc gia là bao nhiêu %?",
      "options": [
        "80%",
        "85%",
        "90%",
        "95%"
      ],
      "correct": "C"
    },
    {
      "question": "Đối với chào giá trực tuyến rút gọn, giá trị bảo đảm dự thầu tối đa là giá trị nào sau đây?",
      "options": [
        "5% giá gói thầu",
        "10% giá gói thầu",
        "1-3% giá gói thầu",
        "Không yêu cầu về bảo đảm dự thầu"
      ],
      "correct": "D"
    },
    {
      "question": "Đối với gói thầu áp dụng chào giá trực tuyến theo quy trình thông thường, trường hợp nhà thầu được mời tham gia chào giá trực tuyến nhưng nhà thầu từ chối tham gia thì xử lý thế nào?",
      "options": [
        "Đề xuất về tài chính của nhà thầu sẽ bị đánh giá là không đạt",
        "Nhà thầu sẽ bị loại và bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong vòng 06 tháng",
        "Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo hồ sơ dự thầu đã nộp trước thời điểm đóng thầu",
        "Phương án A và B đều đúng"
      ],
      "correct": "C"
    },
    {
      "question": "Mua sắm trực tuyến được áp dụng đối với hàng hoá, dịch vụ của gói thầu thuộc dự toán mua sắm với giá gói thầu có hạn mức tối đa là bao nhiêu?",
      "options": [
        "100 triệu đồng",
        "300 triệu đồng",
        "500 triệu đồng",
        "01 tỷ đồng"
      ],
      "correct": "C"
    },
    {
      "question": "Trong mua sắm tập trung áp dụng đấu thầu rộng rãi, hợp đồng điện tử có thể được ký kết giữa các đối tượng nào?",
      "options": [
        "Đơn vị mua sắm tập trung và các nhà thầu trúng thầu (trong trường hợp không ký thỏa thuận khung)",
        "Đơn vị có nhu cầu mua sắm với các nhà thầu trúng thầu (trong trường hợp đơn vị mua sắm tập trung ký thỏa thuận khung với nhà thầu trúng thầu)",
        "Phương án A và B đều đúng",
        "Phương án A và B đều sai"
      ],
      "correct": "C"
    },
    {
      "question": "Hiện nay, Việt Nam đã mở cửa thị trường mua sắm chính phủ (đấu thầu) trong những hiệp định nào?",
      "options": [
        "Chỉ Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
        "Hiệp định CPTPP và Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
        "Hiệp định CPTPP, Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam  và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
        "Tất cả các hiệp định mà Việt Nam là thành viên"
      ],
      "correct": "C"
    },
    {
      "question": "Số lượng các nước thành viên Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP) ký kết hiệp định ban đầu là bao nhiêu nước?",
      "options": [
        "8 nước",
        "9 nước",
        "11 nước",
        "12 nước"
      ],
      "correct": "C"
    },
    {
      "question": "Trong các hiệp định dưới đây, hiệp định nào không có quy định về các trường hợp chỉ định thầu?",
      "options": [
        "Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
        "Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
        "Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam  và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
        "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)"
      ],
      "correct": "D"
    },
    {
      "question": "Hoạt động nào sau đây không thuộc phạm vi điều chỉnh của Nghị định số 95/2020/NĐ-CP?",
      "options": [
        "Mua sắm thiết bị văn phòng",
        "Thuê dịch vụ tư vấn",
        "Thuê quyền sử dụng đất",
        "Mua sắm vật tư y tế"
      ],
      "correct": "C"
    },
    {
      "question": "Theo các hiệp định mà Việt Nam có mở cửa thị trường mua sắm chính phủ (đấu thầu), nhà thầu nước ngoài được tham gia đấu thầu tại Việt Nam trong trường hợp nào?",
      "options": [
        "Tất cả các gói thầu",
        "Chỉ gói thầu ODA",
        "Gói thầu thuộc phạm vi điều chỉnh của hiệp định",
        "Gói thầu có giá trị lớn, phức tạp"
      ],
      "correct": "C"
    },
    {
      "question": "Theo quy định tại Nghị định số 95/2020/NĐ-CP, đấu thầu nội khối là?",
      "options": [
        "Đấu thầu mà chỉ có nhà thầu nội khối được tham dự",
        "Đấu thầu cho các dự án trong khối CPTPP",
        "Đấu thầu giữa các nước thành viên EVFTA, UKVFTA",
        "Đấu thầu trong nước"
      ],
      "correct": "A"
    },
    {
      "question": "Theo quy định tại Nghị định số 09/2022/NĐ-CP, cơ quan mua sắm phải tổ chức đấu thầu nội khối, trừ trường hợp nào?",
      "options": [
        "Không có nhà thầu trong nước tham gia",
        "Giá gói thầu quá lớn",
        "Người có thẩm quyền xét thấy cần tổ chức đấu thầu quốc tế để mang lại hiệu quả cao hơn cho dự án, gói thầu",
        "Hàng hóa thuộc gói thầu quá phức tạp mà nhà thầu trong nước không đáp ứng được"
      ],
      "correct": "C"
    },
    {
      "question": "Theo Thông tư số 21/2022/TT-BKHĐT, khi nào được đưa ra yêu cầu về nhân sự chủ chốt trong gói thầu dịch vụ phi tư vấn?",
      "options": [
        "Trong mọi trường hợp",
        "Khi giá gói thầu lớn",
        "Chỉ khi dịch vụ có yếu tố đặc thù, phức tạp cần thiết phải có nhân sự có hiểu biết, nhiều kinh nghiệm đảm nhận",
        "Khi có yêu cầu của nhà thầu"
      ],
      "correct": "C"
    },
    {
      "question": "Gói thầu mua thuốc là gói thầu nào?",
      "options": [
        "Gói thầu mua sắm hàng hóa",
        "Gói thầu cung cấp dịch vụ phi tư vấn",
        "Gói thầu hỗn hợp",
        "Gói thầu xây lắp"
      ],
      "correct": "A"
    },
    {
      "question": "Đàm phán giá được áp dụng trong trường hợp nào sau đây?",
      "options": [
        "Mua vật tư tiêu hao",
        "Mua thuốc, thiết bị y tế, vật tư xét nghiệm chỉ có 01 hoặc 02 hãng sản xuất",
        "Mua hàng hóa chỉ có 01 hãng sản xuất",
        "Mua hàng hóa chỉ có 01 hoặc 02 hãng sản xuất"
      ],
      "correct": "B"
    },
    {
      "question": "Thời gian có hiệu lực thi hành của Luật số 90/2025/QH15?",
      "options": [
        "Từ ngày 01 tháng 7 năm 2025",
        "Từ ngày 04 tháng 8 năm 2025",
        "Từ ngày 08 tháng 8 năm 2025",
        "Tất cả các đáp án trên đều sai"
      ],
      "correct": "A"
    },  {
      "question": "Mua sắm trực tuyến được áp dụng đối với gói thầu nào sau đây?",
      "options": ["Gói thầu mua sắm hàng hóa, dịch vụ thuộc dự toán mua sắm có giá gói thầu không quá 500 triệu đồng; gói thầu mua sắm hàng hóa, dịch vụ thuộc dự án có giá gói thầu không quá 01 tỷ đồng", "Gói thầu xây lắp thuộc dự toán mua sắm có giá gói thầu không quá 01 tỷ đồng; gói thầu xây lắp thuộc dự án có giá gói thầu không quá 02 tỷ đồng", "Gói thầu mua sắm hàng hóa, cung cấp dịch vụ phi tư vấn thuộc dự án có giá gói thầu không quá 05 tỷ đồng;", "Phương án B và C đều đúng"],
      "correct": "A"
    },
    {
      "question": "Đối với gói thầu áp dụng hình thức chào giá trực tuyến rút gọn, việc thẩm định kết quả lựa chọn nhà thầu được thực hiện như thế nào?",
      "options": ["Chỉ thẩm định nội dung về giá chào", "Bắt buộc thẩm định khi người có thẩm quyền yêu cầu", "Không phải thẩm định kết quả lựa chọn nhà thầu", "Phương án A và B đều đúng"],
      "correct": "C"
    },
    {
      "question": "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì phương án nào sau đây là đúng?",
      "options": ["Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự", "Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia", "Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá", "Phương án B và C đều đúng"],
      "correct": "B"
    },
    {
      "question": "Nhận định nào sau đây về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia là đúng?",
      "options": ["Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân", "Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống", "Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống", "Các phương án trên đều đúng"],
      "correct": "D"
    },
    {
      "question": "Đối với đấu thầu qua mạng, chức năng trả lời làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia được thực hiện bao nhiêu lần đối với mỗi yêu cầu làm rõ?",
      "options": ["01 lần", "02 lần", "03 lần", "Không giới hạn số lần"],
      "correct": "A"
    },
    {
      "question": "Đối với đấu thầu qua mạng, nhà thầu liên danh nộp bảo đảm dự thầu theo thể thức nào sau đây?",
      "options": ["Từng thành viên liên danh có thể sử dụng thể thức bảo lãnh dự thầu khác nhau", "Các thành viên liên danh bắt buộc phải sử dụng cùng thể thức bảo lãnh dự thầu điện tử", "Các thành viên liên danh phải sử dụng cùng thể thức: bảo lãnh dự thầu điện tử hoặc bảo lãnh dự thầu bằng giấy", "Các thành viên liên danh bắt buộc phải sử dụng cùng thể thức bảo lãnh dự thầu bằng giấy"],
      "correct": "C"
    },
    {
      "question": "Nhận định nào sau đây là đúng?",
      "options": ["Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của chủ đầu tư, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của chủ đầu tư thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu", "Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của bên mời thầu, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của bên mời thầu thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu", "Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của tổ chuyên gia, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của tổ chuyên gia thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu", "Trong vòng 05 ngày làm việc, kể từ ngày nhận được yêu cầu của tư vấn đấu thầu, nếu nhà thầu từ chối hoặc không nộp bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh (đối với trường hợp sử dụng bảo lãnh dự thầu bằng văn bản giấy) theo yêu cầu của tư vấn đấu thầu thì nhà thầu sẽ bị xử lý theo đúng cam kết của nhà thầu trong đơn dự thầu"],
      "correct": "A"
    },
    {
      "question": "Đối với đấu thầu không qua mạng, quy định về việc công khai biên bản mở thầu trên Hệ thống nào sau đây là đúng?",
      "options": ["Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 24 giờ kể từ thời điểm mở thầu", "Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 02 giờ kể từ thời điểm mở thầu", "Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 04 giờ kể từ thời điểm mở thầu", "Được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong thời hạn 03 ngày làm việc kể từ thời điểm mở thầu"],
      "correct": "A"
    },
    {
      "question": "Gói thầu nào sau đây không phải áp dụng đấu thầu qua mạng trên Hệ thống mạng đấu thầu quốc gia?",
      "options": ["Gói thầu hỗn hợp theo phương thức 02 giai đoạn", "Gói thầu đấu thầu rộng rãi quốc tế", "Gói thầu áp dụng hình thức chỉ định thầu, đặt hàng, giao nhiệm vụ, mua sắm trực tiếp, tự thực hiện, đàm phán giá, lựa chọn nhà thầu trong trường hợp đặc biệt, gói thầu có sự tham gia của cộng đồng", "Các phương án trên đều đúng"],
      "correct": "D"
    },
    {
      "question": "Việc hủy E-TBMT được thực hiện tại thời điểm nào?",
      "options": ["Được thực hiện tại thời điểm đóng thầu trong trường hợp không có nhà thầu tham dự thầu", "Được thực hiện sau thời điểm mở thầu", "Được thực hiện trước thời điểm đóng thầu", "Phương án A và C đều đúng"],
      "correct": "D"
    },
    {
      "question": "Khi chủ đầu tư sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) trên Hệ thống mạng đấu thầu quốc gia, nhận định nào sau đây đúng?",
      "options": ["Nhà thầu chịu trách nhiệm theo dõi thông tin trên Hệ thống mạng đấu thầu quốc gia để cập nhật thông tin về việc sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) để làm cơ sở chuẩn bị E-HSDT", "Nhà thầu phải tự chịu trách nhiệm và chịu bất lợi trong quá trình tham dự thầu nếu không theo dõi, cập nhật thông tin sửa đổi E-HSMT, thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia trong quá trình tham dự thầu", "Hệ thống mạng đấu thầu quốc gia tự động gửi email thông báo về việc sửa đổi E-HSMT, thay đổi thời điểm đóng thầu (nếu có) cho các nhà thầu quan tâm đến gói thầu", "Các phương án trên đều đúng"],
      "correct": "D"
    },
    {
      "question": "Trường hợp E-HSMT không đầy đủ thông tin (thiếu thiết kế, bản vẽ và các tài liệu khác) hoặc thông tin không rõ ràng, gây khó khăn cho nhà thầu trong việc chuẩn bị E-HSDT thì chủ đầu tư phải làm gì?",
      "options": ["Phải sửa đổi, bổ sung E-HSMT cho phù hợp và tiến hành đăng tải lại E- HSMT", "Thực hiện bổ sung, hoàn thiện cho phù hợp và sửa đổi trên Hệ thống", "Đính kèm thêm các thành phần còn thiếu của E-HSMT trên Hệ thống", "Huỷ thầu"],
      "correct": "A"
    },
    {
      "question": "Việc phải ký kết hợp đồng điện tử trên Hệ thống mạng đấu thầu quốc gia được áp dụng đối với gói thầu nào sau đây?",
      "options": ["Gói thầu áp dụng đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh, chào giá trực tuyến, mua sắm trực tuyến mà việc thanh toán hợp đồng được thực hiện qua Kho bạc nhà nước", "Gói thầu áp dụng đấu thầu rộng rãi, đấu thầu hạn chế, chào hàng cạnh tranh, chào giá trực tuyến, mua sắm trực tuyến mà việc thanh toán hợp đồng không thực hiện qua Kho bạc nhà nước", "Tất cả các gói thầu áp dụng đấu thầu qua mạng", "Tất cả các gói thầu áp dụng đấu thầu qua mạng và không qua mạng"],
      "correct": "A"
    },
    {
      "question": "Đối với đấu thầu qua mạng, sau khi đánh giá E-HSDT, tổ trưởng tổ chuyên gia phải thực hiện nội dung gì sau đây trên Hệ thống mạng đấu thầu quốc gia?",
      "options": ["Đính kèm bản scan báo cáo đánh giá E-HSDT (có chữ ký của tất cả thành viên trong tổ chuyên gia)", "Đính kèm bản scan báo cáo đánh giá E-HSDT (không cần có chữ ký của tất cả thành viên trong tổ chuyên gia)", "Đính kèm bản scan báo cáo đánh giá E-HSDT (chỉ cần chữ ký của tổ trưởng tổ chuyên gia)", "Tất cả các phương án đều sai"],
      "correct": "A"
    },
    {
      "question": "Gói thầu hàng hóa có giá gói thầu 02 tỷ đồng thực hiện chào giá trực tuyến theo quy trình rút gọn, trường hợp chủ đầu tư đăng tải thông báo mời thầu vào 11h00 ngày Thứ 2 (08/9/2025), thời điểm nào sau đây là thời điểm kết thúc chào giá trực tuyến sớm nhất?",
      "options": ["11h00 ngày thứ 6 (12/9/2025)", "8h00 ngày thứ 3 (16/9/2025)", "11h00 ngày thứ 3 (16/9/2025)", "8h00 ngày thứ 4 (17/9/2025)"],
      "correct": "D"
    },
    {
      "question": "Đối với đấu thầu qua mạng, nhà thầu đính kèm bản scan thư giảm giá khi tham dự thầu trên Hệ thống mạng đấu thầu quốc gia thì việc đánh giá tệp tin đính kèm này được thực hiện theo phương án nào sau đây?",
      "options": ["Không được xem xét, đánh giá", "Được xem xét, đánh giá căn cứ tệp tin đính kèm", "Được làm rõ trong trường hợp có sự sai khác thông tin về giảm giá giữa tệp tin đính kèm này và thông tin kê khai trong đơn dự thầu", "Được bổ sung trong trường hợp có sự sai khác thông tin về giảm giá giữa tệp tin đính kèm này và thông tin kê khai trong đơn dự thầu"],
      "correct": "A"
    },
    {
      "question": "Đối với đấu thầu qua mạng, gói thầu mua sắm hàng hóa, dịch vụ phi tư vấn có giá gói thầu không quá 10 tỷ đồng. Trường hợp tại thời điểm đóng thầu không có nhà thầu tham dự thầu, chủ đầu tư quyết định xử lý tình huống theo cách gia hạn thời điểm đóng thầu thì thời gian gia hạn tối thiểu là bao nhiêu ngày?",
      "options": ["05 ngày làm việc", "05 ngày", "03 ngày", "03 ngày làm việc"],
      "correct": "A"
    },
    {
      "question": "Phương thức lựa chọn nhà thầu nào sau đây áp dụng cho đấu thầu qua mạng?",
      "options": ["01 giai đoạn, 01 túi hồ sơ", "02 giai đoạn, 01 túi hồ sơ", "02 giai đoạn, 02 túi hồ sơ", "Các phương án trên đều đúng"],
      "correct": "A"
    },
    {
      "question": "Đối với dự toán mua sắm, hạn mức áp dụng chào giá trực tuyến theo quy trình thông thường đối với gói thầu mua sắm hàng hóa là?",
      "options": ["Có giá gói thầu không quá 500 triệu đồng", "Có giá gói thầu không quá 02 tỷ đồng", "Có giá gói thầu không quá 05 tỷ đồng", "Không có quy định về hạn mức áp dụng"],
      "correct": "D"
    },
    {
      "question": "Gói thầu hàng hóa có giá gói thầu 01 tỷ đồng thực hiện chào giá trực tuyến theo quy trình rút gọn, trường hợp chủ đầu tư đăng tải thông báo mời thầu vào 11h00 ngày Thứ 2 (08/9/2025), thời điểm nào sau đây là thời điểm kết thúc chào giá trực tuyến sớm nhất?",
      "options": ["8h00 ngày thứ 6 (12/9/2025)", "8h00 ngày thứ bẩy (13/9/2025)", "11h00 ngày thứ 6 (12/9/2025)", "8h00 ngày thứ 2 (15/9/2025)"],
      "correct": "C"
    },
    {
      "question": "Đối với đấu thầu rộng rãi qua mạng, trường hợp gói thầu có giá trị bảo đảm dự thầu nhỏ hơn 50 triệu đồng, thời gian có hiệu lực của thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh được quy định tại đâu?",
      "options": ["Trong E-HSMT", "Trong thông báo mời đối chiếu tài liệu", "Trong thông báo mời thương thảo hợp đồng", "Các phương án trên đều sai"],
      "correct": "B"
    },
    {
      "question": "Đối với đấu thầu rộng rãi qua mạng, trường hợp gói thầu có giá trị bảo đảm dự thầu nhỏ hơn 50 triệu đồng, nhà thầu thực hiện nộp thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh thì thời gian có hiệu lực của thư bảo lãnh dự thầu hoặc giấy chứng nhận bảo hiểm bảo lãnh được tính từ ngày nào?",
      "options": ["Ngày có thời điểm đóng thầu", "Ngày phê duyệt kết quả lựa chọn nhà thầu", "Ngày thực hiện đối chiếu tài liệu", "Các phương án trên đều sai"],
      "correct": "C"
    },
    {
      "question": "Đối với đấu thầu qua mạng, trường hợp cần sửa đổi E-HSDT đã nộp trước thời điểm đóng thầu, nhà thầu phải thực hiện theo phương án nào sau đây khi E-HSMT của gói thầu này không phải sửa đổi?",
      "options": ["Phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó để sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới", "Không phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó, chỉ cần sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới", "Sửa đổi cho phù hợp E-HSDT đã nộp mà không phải nộp lại E-HSDT mới", "Nhà thầu không được sửa đổi E-HSDT đã nộp"],
      "correct": "nan"
    },
    {
      "question": "Đối với đấu thầu qua mạng, nhà thầu đã nộp E-HSDT nhưng sau đó E-HSMT của gói thầu này sửa đổi thì nhà thầu cần thực hiện theo phương án nào sau đây?",
      "options": ["Phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó để sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới", "Không phải tiến hành rút toàn bộ E-HSDT đã nộp trước đó, chỉ cần sửa đổi cho phù hợp và tiến hành nộp lại E-HSDT mới", "Sửa đổi cho phù hợp E-HSDT đã nộp mà không phải nộp lại E-HSDT mới", "Các phương án trên đều sai"],
      "correct": "A"
    },
    {
      "question": "Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA) có hiệu lực từ ngày nào?",
      "options": ["01/7/2020", "01/8/2020", "01/9/2020", "01/10/2020"],
      "correct": "B"
    },
    {
      "question": "Trường hợp tổ chức lựa chọn nhà thầu đối với gói thầu mua sắm hàng hóa thuộc phạm vi điều chỉnh của Hiệp định UKVFTA tại thời điểm tháng 9/2025, cơ quan mua sắm lập hồ sơ mời thầu theo Mẫu hồ sơ mời thầu ban hành kèm theo Thông tư nào?",
      "options": ["Thông tư số 09/2020/TT-BKHĐT", "Thông tư số 12/2022/TT-BKHĐT", "Thông tư số 15/2022/TT-BKHĐT", "Thông tư số 20/2022/TT-BKHĐT"],
      "correct": "C"
    },
    {
      "question": "Việc đấu thầu thuốc theo quy định của Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA) được Chính phủ giao cơ quan, tổ chức nào hướng dẫn?",
      "options": ["Bộ Tư pháp", "Bộ Y tế", "Bộ Tài chính", "Bộ Công Thương"],
      "correct": "B"
    },
    {
      "question": "Việt Nam chính thức trở thành thành viên của Hiệp định mua sắm chính phủ của WTO (GPA) từ năm nào?",
      "options": ["2018", "2019", "2020", "Việt Nam chưa phải là thành viên của GPA"],
      "correct": "D"
    },
    {
      "question": "Theo quy định tại Nghị định số 95/2020/NĐ-CP (được sửa đổi, bổ sung tại Nghị định số 09/2022/NĐ-CP, Nghị định số 17/2025/NĐ-CP), khái niệm Nước thành viên không bao gồm:",
      "options": ["Nước thành viên Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)", "Nước thành viên EU", "Vương quốc Anh và Bắc Ai-len", "Các nước ASEAN chưa gia nhập Hiệp định CPTPP"],
      "correct": "D"
    },
    {
      "question": "Đối với gói thầu thuộc phạm vi điều chỉnh của Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP), ngôn ngữ sử dụng trong đấu thầu nội khối là:",
      "options": ["Chỉ tiếng Việt", "Chỉ tiếng Anh", "Tiếng Việt; hoặc tiếng Việt và tiếng Anh", "Bất kỳ ngôn ngữ nào của các nước thành viên"],
      "correct": "C"
    },
    {
      "question": "Theo quy định tại Thông tư số 21/2022/TT-BKHĐT, hồ sơ mời thầu gói thầu dịch vụ phi tư vấn không được đưa ra yêu cầu nào sau đây:",
      "options": ["Yêu cầu về năng lực", "Yêu cầu về kinh nghiệm", "Yêu cầu nhà thầu phải có kinh nghiệm cung cấp dịch vụ trong lãnh thổ của một quốc gia cụ thể", "Yêu cầu về chất lượng dịch vụ"],
      "correct": "C"
    },
    {
      "question": "Trong Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP), việc áp dụng biện pháp ưu đãi trong nước:",
      "options": ["Được phép áp dụng vĩnh viễn", "Không bao giờ được phép áp dụng", "Được phép áp dụng trong thời gian chuyển tiếp", "Tùy quy mô, tính chất từng gói thầu"],
      "correct": "C"
    },
    {
      "question": "Đối với gói thầu thuộc phạm vi điều chỉnh của Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA), có những hình thức lựa chọn nhà thầu nào:",
      "options": ["Đấu thầu hạn chế và chỉ định thầu", "Chỉ có chỉ định thầu", "Đấu thầu rộng rãi và chỉ định thầu", "Chỉ có đấu thầu rộng rãi"],
      "correct": "C"
    },
    {
      "question": "Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP) có cho phép áp dụng đấu thầu qua mạng không?",
      "options": ["Không cho phép", "Bắt buộc phải áp dụng", "Khuyến khích áp dụng", "Tùy quy mô, tính chất từng gói thầu"],
      "correct": "C"
    },
    {
      "question": "Phương án nào sau đây được xác định là một bước trong quá trình lựa chọn nhà thầu theo quy trình chỉ định thầu thông thường được pháp luật về đấu thầu quy định?",
      "options": ["Xác định tối thiểu 03 nhà thầu có đủ năng lực, kinh nghiệm để mời nhận hồ sơ yêu cầu", "Chuẩn bị và gửi dự thảo hợp đồng cho tối thiểu 03 nhà thầu có đủ năng lực, kinh nghiệm để đàm phán hợp đồng", "Đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu", "Phương án A và C đều đúng"],
      "correct": "C"
    },
    {
      "question": "Trường hợp đơn vị được giao nhiệm vụ mua sắm tập trung không đủ năng lực, kinh nghiệm tổ chức lựa chọn nhà thầu thì thực hiện như thế nào?",
      "options": ["Báo cáo người có thẩm quyền để giao đơn vị khác thực hiện việc lựa chọn nhà thầu", "Phải thực hiện theo nhiệm vụ được giao, không được đi thuê đơn vị tư vấn để thực hiện việc lựa chọn nhà thầu", "Được phép thuê đơn vị tư vấn đấu thầu có kinh nghiệm để thực hiện việc lựa chọn nhà thầu", "Phương án A và C đều đúng"],
      "correct": "C"
    },
    {
      "question": "Quy trình, thủ tục lựa chọn nhà thầu đối với chỉ định thầu theo quy trình rút gọn bao gồm các bước nào sau đây?",
      "options": ["Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; thương thảo, hoàn thiện hợp đồng; trình, phê duyệt và công khai kết quả lựa chọn nhà thầu; ký kết hợp đồng", "Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; thương thảo hợp đồng; trình, phê duyệt kết quả lựa chọn nhà thầu; ký kết và quản lý thực hiện hợp đồng", "Chuẩn bị và gửi dự thảo hợp đồng cho nhà thầu; hoàn thiện hợp đồng, phê duyệt và công khai kết quả lựa chọn nhà thầu; ký kết và quản lý thực hiện hợp đồng", "Lập, phê duyệt hồ sơ yêu cầu; xác định nhà thầu dự kiến được mời nhận hồ sơ yêu cầu; đánh giá hồ sơ đề xuất và thương thảo về các đề xuất của nhà thầu; phê duyệt và công khai kết quả lựa chọn nhà thầu; hoàn thiện, ký kết và quản lý thực hiện hợp đồng"],
      "correct": "C"
    },
    {
      "question": "Phương án nào xác định quy mô của hợp đồng tương tự đối với gói thầu áp dụng mua sắm tập trung là phù hợp?",
      "options": ["Trong mọi trường hợp có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,5 (Y thông thường khoảng 50% giá trị của gói thầu đang xét)", "Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn thì có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,25 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu", "Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn thì có thể điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,5 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu", "Trường hợp mua sắm tập trung hoặc mua sắm hàng hóa có số lượng, khối lượng mời thầu lớn, chủ đầu tư báo cáo người có thẩm quyền để điều chỉnh giảm yêu cầu về quy mô của hợp đồng tương tự xuống còn Y/1,25 (Y thông thường khoảng 50% giá trị của gói thầu đang xét) và/hoặc chia gói thầu thành các phần (lô) để tăng tính cạnh tranh cho gói thầu"],
      "correct": "B"
    },
    {
      "question": "Đối với gói thầu cung cấp dịch vụ tư vấn không qua mạng, trường hợp hồ sơ đề xuất về tài chính của nhà thầu không vượt qua bước đánh giá về kỹ thuật sẽ được xử lý như thế nào theo quy định của pháp luật về đấu thầu?",
      "options": ["Trả lại nguyên trạng cho nhà thầu trong thời hạn 10 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn", "Trả lại nguyên trạng cho nhà thầu trong thời hạn 05 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn", "Trả lại nguyên trạng cho nhà thầu trong thời hạn 15 ngày kể từ ngày ký hợp đồng với nhà thầu được lựa chọn", "Hồ sơ được lưu trữ theo quy định của Pháp luật về lưu trữ"],
      "correct": "A"
    },
    {
      "question": "Việc giữ lại hồ sơ tài chính của nhà thầu không đạt kỹ thuật sau thời hạn quy định sẽ…?",
      "options": ["Là cơ sở để tiếp tục đánh giá trong trường hợp phải đánh giá lại", "Bảo đảm trách nhiệm của chủ đầu tư theo quy định của pháp luật về đấu thầu", "Có thể dẫn tới khiếu nại từ nhà thầu", "Phương án A và B đều đúng"],
      "correct": "C"
    },
    {
      "question": "Thông tư số 80/2025/TT-BTC quy định chi tiết mẫu hồ sơ yêu cầu, báo cáo đánh giá, báo cáo thẩm định, kiểm tra, báo cáo tình hình thực hiện hoạt động đấu thầu có hiệu lực từ thời điểm nào?",
      "options": ["Ngày 08/8/2025", "Ngày 04/8/2025", "Ngày 01/8/2025", "Ngày 01/7/2025"],
      "correct": "A"
    },
    {
      "question": "Trung tâm X là đơn vị sự nghiệp công lập tự chủ chi thường xuyên thuộc tỉnh A tổ chức lựa chọn nhà thầu đối với gói thầu mua sắm hàng hóa sử dụng nguồn thu hợp pháp (không sử dụng ngân sách nhà nước), trường hợp nhà thầu có kiến nghị về hồ sơ mời thầu gửi cả người có thẩm quyền và chủ đầu tư của gói thầu thì việc giải quyết kiến nghị được thực hiện theo quy trình nào?",
      "options": ["Trong thời hạn 07 ngày làm việc kể từ ngày nhận được đơn kiến nghị của nhà thầu, chủ đầu tư phải có văn bản giải quyết kiến nghị gửi đến nhà thầu, cơ quan, tổ chức và đăng tải trên Hệ thống mạng đấu thầu quốc gia.", "Người có thẩm quyền phải có văn bản giải quyết kiến nghị gửi đến nhà thầu, cơ quan, tổ chức trong thời hạn 07 ngày làm việc kể từ ngày nhận được đơn kiến nghị của nhà thầu và gửi đến chủ đầu tư để đăng tải trên Hệ thống mạng đấu thầu quốc gia.", "Thực hiện theo quy trình về giải quyết kiến nghị do người đứng đầu Trung tâm X ban hành trong đơn vị mình.", "Phương án A và B đều đúng"],
      "correct": "A"
    },
    {
      "question": "Ông A là người đại diện hợp pháp của nhà thầu B ký đơn kiến nghị về kết quả lựa chọn nhà thầu. Trong trường hợp này, anh C là con đẻ của ông A có được tham gia là thành viên Hội đồng giải quyết kiến nghị hay không?",
      "options": ["Không được tham gia", "Được tham gia nếu đủ năng lực, kinh nghiệm", "Được tham gia khi Chủ tịch Hội đồng giải quyết kiến nghị chấp thuận", "Được tham gia khi người có thẩm quyền chấp thuận"],
      "correct": "A"
    },
    {
      "question": "Đơn vị nào có trách nhiệm tiếp nhận và quản lý chi phí do nhà thầu có kiến nghị nộp?",
      "options": ["Người có thẩm quyền", "Chủ đầu tư", "Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị", "Tổ chuyên gia"],
      "correct": "C"
    },
    {
      "question": "Đối với gói thầu xây lắp áp dụng đấu thầu quốc tế, trường hợp nhà thầu xếp thứ nhất có hồ sơ dự thầu không cân bằng (có đơn giá chào cao hơn đáng kể so với đơn giá tương ứng trong dự toán gói thầu ở các hạng mục công việc có các yêu cầu kỹ thuật đơn giản, dễ thực hiện, hạng mục công việc có khả năng phát sinh khối lượng ngoài khối lượng trong bảng giá dự thầu và có đơn giá chào thấp hơn đáng kể so với đơn giá tương ứng trong dự toán gói thầu ở các hạng mục công việc phức tạp, khó thực hiện) thì chủ đầu tư có thể xử lý thế nào?",
      "options": ["Yêu cầu nhà thầu làm rõ bằng văn bản về các chi phí cấu thành giá dự thầu", "Có thể quy định giá trị bảo đảm thực hiện hợp đồng lớn hơn 10% nhưng không quá 30% giá hợp đồng để đề phòng rủi ro", "Mời nhà thầu chào lại giá", "Phương án A và B đều đúng"],
      "correct": "D"
    },
    {
      "question": "Trường hợp xí nghiệp được tách ra khỏi pháp nhân theo quy định của pháp luật về dân sự thì nhà thầu tiếp nhận có được kế thừa năng lực, kinh nghiệm của xí nghiệp hay không?",
      "options": ["Không được kế thừa năng lực, kinh nghiệm của xí nghiệp", "Được kế thừa năng lực, kinh nghiệm của xí nghiệp", "Chỉ được kế thừa về kinh nghiệm của xí nghiệp", "Chỉ được kế thừa về năng lực của xí nghiệp"],
      "correct": "B"
    },
    {
      "question": "Nhà thầu tư vấn giám sát đồng thời thực hiện tư vấn kiểm định đối với gói thầu do nhà thầu đó giám sát thì nhà thầu đó sẽ bị xử lý như thế nào?",
      "options": ["Bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm và khi tham dự thầu phải thực hiện biện pháp bảo đảm dự thầu với giá trị gấp 03 lần giá trị yêu cầu trong thời hạn 02 năm", "Khi tham dự thầu phải thực hiện biện pháp bảo đảm dự thầu với giá trị gấp 03 lần giá trị yêu cầu trong thời hạn 02 năm", "Bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm", "Không bị xử lý vi phạm"],
      "correct": "C"
    },
    {
      "question": "Tham gia lập, đồng thời tham gia thẩm định hồ sơ mời thầu đối với cùng một gói thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
      "options": ["02 năm", "Từ trên 02 năm đến 03 năm", "Từ trên 01 năm đến 02 năm", "Từ 06 tháng đến 01 năm"],
      "correct": "D"
    },
    {
      "question": "Nhà thầu liên danh A-B gồm 2 thanh viên là nhà thầu A và nhà thầu B. Nhà thầu A làm giả thông tin, hồ sơ, tài liệu về hợp đồng tương tự của mình để tham dự thầu sẽ bị xử lý như thế nào?",
      "options": ["Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm", "Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm", "Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm", "Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm"],
      "correct": "A"
    },
    {
      "question": "Nhà thầu liên danh A-B gồm 2 thành viên là nhà thầu A và nhà thầu B. Nhà thầu A dàn xếp, thỏa thuận với các bên rút hồ sơ dự thầu để liên danh A-B trúng thầu sẽ bị xử lý như thế nào?",
      "options": ["Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm", "Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm", "Thành viên liên danh A bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm", "Tất cả thành viên trong liên danh A-B bị cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm"],
      "correct": "C"
    }
  ];