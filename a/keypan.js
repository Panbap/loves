
/**
* ======================================
* Description: Handles main user interface logic & Vietnamese Text Compression
* Author: Devpan
* Created: 2026-01-01
* ======================================
*/

// Danh sách từ ngắn phổ biến 
const SHORT_WORDS = [
     // --- Nhóm 7 từ (8 mục) ---
    "anh muốn thấy nụ cười của em", "em muốn thấy nụ cười của anh",
    "anh muốn cùng em đi khắp nơi", "em muốn cùng anh đi khắp nơi",
    "anh muốn nói là anh yêu em", "anh muốn ở bên em mãi mãi", "em muốn ở bên anh mãi mãi",
    "em muốn nói là em yêu anh",

    // --- Nhóm 6 từ (5 mục) ---
    "anh muốn ôm em thật chặt", "em muốn ôm anh thật chặt", "anh muốn bên em trọn đời",
    "em muốn bên anh trọn đời", "phụ nữ là để yêu thương",

    // --- Nhóm 5 từ (52 mục) ---
    "người quan trọng nhất đời", "người anh thương duy nhất", "người em thương duy nhất",
    "một phần không thể thiếu", "điều ước thành hiện thực", "trọn đời trọn kiếp này",
    "yêu anh hơn chính mình", "hãy luôn hạnh phúc nhé", "chúc anh buổi sáng vui",
    "chúc anh ngủ thật ngon", "mãi mãi không chia lìa", "người phụ nữ tuyệt vời",
    "yêu em hơn chính mình", "chúc em buổi sáng vui", "chúc em ngủ thật ngon",
    "cùng nhau đi khắp nơi", "cùng nhau đi đến cùng", "anh muốn chăm sóc em",
    "em muốn chăm sóc anh", "anh yêu em nhiều lắm", "em yêu anh nhiều lắm",
    "anh nhớ em nhiều lắm", "em nhớ anh nhiều lắm", "anh yêu em rất nhiều",
    "em yêu anh rất nhiều", "anh nhớ em phát điên", "em nhớ anh phát điên",
    "bên nhau cho đến già", "luôn luôn ở bên nhau", "luôn có anh bên cạnh",
    "anh muốn nắm tay em", "em muốn nắm tay anh", "anh muốn gặp em quá",
    "em muốn gặp anh quá", "anh chỉ cần em thôi", "em chỉ cần anh thôi",
    "làm thế giới rực rỡ", "đón tuổi mới vui vẻ", "anh sẽ luôn bên em",
    "em sẽ luôn bên anh", "mãi mãi ở bên nhau", "tặng em một bó hoa", "anh muốn ở bên em",
    "em muốn ở bên anh", "cho dù có thế nào", "hãy ở bên anh nhé", "cần gì nến và hoa",
    "hãy ở bên em nhé", "cảm ơn vì tất cả", "có một kỳ nghỉ lễ",
    "chúc mọi điều tốt đẹp", "chúc một ngày tốt lành",

    // --- Nhóm 4 từ (113 mục) ---
    "khai trương hồng phát", "an khang thịnh vượng", "ngọn lửa nhiệt huyết",
    "uống nước nhiều vào", "ngập tràn hạnh phúc", "tình làng nghĩa xóm",
    "thuận buồm xuôi gió", "chúc mừng sinh nhật", "tuổi mới thành công",
    "một chặng đường dài", "bách niên giai lão", "trăm năm hạnh phúc",
    "bền chặt ngọt ngào", "buổi sáng tốt lành", "tính đường vào tim", "ngôi sao sáng nhất",
    "thời tiết đẹp nhất", "ít đường ngọt ngào", "ngập tràn niềm vui", "đầu bạc răng long",
    "thắp sáng cả ngày", "món quà tuyệt vời", "gặp những giấc mơ", "đánh rơi nhịp tim",
    "uống nhầm ánh mắt", "chốt đơn luôn nhé", "chúc mừng năm mới", "phát tài phát lộc",
    "mã đáo thành công", "tôn vinh phái đẹp", "của riêng hai đứa", "món quà tặng anh",
    "nhớ giữ sức khỏe", "ngã vào lòng anh", "say nhầm nụ cười", "bị thích anh rồi",
    "thế giới của anh", "sức khỏe dồi dào", "buôn may bán đắt", "chắp cánh ước mơ",
    "sinh nhật vui vẻ", "tuổi mới rạng rỡ", "rạng rỡ tuổi mới", "một nửa thế giới",
    "xinh đẹp như hoa", "rạng rỡ như nắng", "tình yêu của anh", "món quà tặng em",
    "đang làm gì đấy", "đang làm gì thế", "về đến nhà chưa", "ngã vào lòng em",
    "thả tim cho anh", "bị thích em rồi", "chính em là quà", "bên em bình yên",
    "vũ trụ muôn vàn", "tấn tài tấn lộc", "bến bờ tri thức", "công ơn thầy cô",
    "ngủ sớm đi nhé", "cho anh xin số", "thả tim cho em", "biết ơn cha mẹ",
    "vạn sự bình an", "tri ân thầy cô", "anh lại tự hỏi", "cho em xin số", "chỗ dựa ấm áp",
    "tỏ ra mạnh mẽ", "vạn sự như ý", "bao nhiêu năm nữa", "điều gì xảy ra", "tớ mới nhận ra",
    "chúc mừng giáng sinh", "giáng sinh vui vẻ", "năm mới vui vẻ", "năm mới hạnh phúc",
    "mọi điều tốt đẹp","cảm ơn rất nhiều", "cảm ơn mọi người",
    "cảm ơn vì đã", "bất cứ lúc nào", "bất cứ điều gì", "anh yêu em nhất",
    "em yêu anh nhất", "anh rất nhớ em", "em rất nhớ anh", "anh luôn nhớ em",
    "em luôn nhớ anh", "anh luôn yêu em", "em luôn yêu anh", "không thể sống thiếu",
    "không thể thiếu em", "không thể thiếu anh", "em là tất cả", "anh là tất cả",
    "ôm em thật chặt", "ôm anh thật chặt", "anh xin lỗi em", "em xin lỗi anh",
    "tha lỗi cho anh", "tha lỗi cho em", "có anh ở đây", "có em ở đây",
    "đời này kiếp này", "trọn đời bên nhau", "công lao to lớn", "kính chúc thầy cô",
    "kính chúc cha mẹ", "kính chúc ông bà", "ông bà mạnh khỏe", "tình bạn bền lâu",
   
    // --- Nhóm 3 từ (183 mục) ---
    "từng khoảnh khắc", "chặng đường phía", "không thể thiếu", "niềm hạnh phúc",
    "tuần trăng mật", "chào buổi sáng", "nghĩa thầy trò", "dù chặng đường",
    "sinh nhật thật", "dành tặng anh", "đôi uyên ương", "anh thương em", "em thương anh",
    "tay trong tay", "nhẫn đính hôn", "chào buổi tối", "chúc ngủ ngon", "có rảnh không",
    "xong chưa vậy", "mệt lắm không", "không sao đâu", "tình đồng đội", "không bao giờ",
    "ngày đặc biệt", "thêm tuổi mới", "đáng nhớ nhất", "thuộc về nhau", "gửi tặng anh",
    "dành tặng em", "niềm hy vọng", "mãi bên nhau", "đừng lo lắng", "về chung nhà",
    "mãi bên nhau", "người lái đò", "đón tuổi mới", "làm tan biến", "từng góc phố",
    "từng con phố", "yêu mình anh", "gửi tặng em", "tặng anh nè", "gửi anh yêu",
    "gửi đến anh", "anh muốn em", "em muốn anh", "mối quan hệ", "lời tỏ tình",
    "đến mãi mãi", "đến bạc đầu", "hẹn gặp lại", "ăn cơm chưa", "tốt lắm rồi",
    "vui lên nào", "hẹn gặp sau", "tình mẫu tử", "tình phụ tử", "tình anh em",
    "đến mãi mãi", "đến bạc đầu", "ngày phụ nữ", "bắt đầu một", "một cơn gió",
    "chỉ ước một", "vẫn hay nói", "yêu mình em", "mãi yêu anh", "tặng em nè", "gửi em yêu",
    "gửi đến em", "anh muốn ở", "anh nhớ em", "em nhớ anh", "anh yêu em", "em yêu anh",
    "anh cần em", "em cần anh", "lời cảm ơn", "cả đời này", "cảm ơn anh", "đi đâu đấy",
    "đợi tí nhé", "cố lên nhé", "anh chị em", "cả đời này", "ơn thầy cô", "chỉ cần là",
    "em hãy nhớ", "qua tất cả", "một bó hoa", "góc phố ấy", "vào mắt em", "chỉ cần em",
    "tin vào sự", "anh tự hỏi", "có thế nào", "mãi yêu em", "em muốn ở", "cảm ơn em",
    "để anh lo", "có ra sao", "anh ở đây", "một ai đó", "mọi ồn ào", "vì đã đến",
    "để em lo", "không lối thoát", "khiến mình vui", "vừa bằng đúng", "mọi giông bão", 
    "cậu giống như","hãy cho phép", "làm tan chảy", "không chỉ là", "nghĩ đến cậu", "đã xuất hiện",
    "thực ra lại", "không ồn ào", "gửi đến bạn", "như thế nào", "bạn sẽ nhận",
    "bạn có thể", "một lý do", "mà còn là", "mà có lẽ",
    "chúc may mắn", "chúc bình an", "ngày nhà giáo", "ngày của mẹ",
    "bạn khỏe không", "có chuyện gì", "chuyện gì vậy", "tan làm chưa",
    "đến nơi chưa", "về nhà chưa", "nhớ ăn cơm", "nhớ uống nước",
    "nhớ giữ ấm", "cẩn thận nhé", "đừng thức khuya", "ngủ sớm nhé",
    "nghỉ ngơi nhé", "nhắn tin cho", "xin lỗi nhé", "mình xin lỗi",
    "không có gì", "không sao cả", "đừng khách sáo", "tuyệt vời quá",
    "tất nhiên rồi", "chắc chắn rồi", "để mình xem", "mình hiểu rồi",
    "mình biết rồi", "mình không biết", "theo mình thì", "thực sự là",
    "tóm lại là", "ngay bây giờ", "một lát nữa", "hẹn mai gặp",
    "mai gặp nhé", "chào mọi người", "chào các bạn", "chào buổi chiều",
    "làm người yêu", "làm bạn gái", "làm bạn trai", "đừng giận anh",
    "đừng giận em", "đừng buồn nữa", "đừng khóc nữa", "gửi đến mẹ",
    "gửi đến thầy", "con yêu mẹ", "con yêu ba", "cảm ơn mẹ",
    "cảm ơn ba", "cảm ơn thầy", "ơn sinh thành", "ơn dưỡng dục",
    "bạn thân yêu", "tình bạn đẹp",

    // --- Nhóm tiếng anh ---
    "i love you", "love you", "happy birthday", "miss you", "i miss you", "take care", "merry christmas", "happy new year",
];

// Danh sách từ ngắn phổ biến 
const LOVE_WORDS = [
    // --- Nhóm 2 từ (434 mục) ---
    "thoang thoảng", "người thương", "chiều chuộng", "nuông chiều", "nhường nhịn",
    "tình thương", "cuồng nhiệt", "bâng khuâng", "thân thương", "khoảnh khắc",
    "luôn thương", "những người", "người tình", "mến thương", "trân trọng", "thương nhớ",
    "nhớ thương", "khoan dung", "yêu thương", "thương yêu", "tình nghĩa", "thắm thiết",
    "lời nguyện", "chân thành", "thủy chung", "chung thủy", "chung thuỷ", "thật nhiều",
    "ghen tuông", "thương lắm", "rất thương", "ước nguyện", "người thân", "thân thiết",
    "kính trọng", "nghĩa tình", "không muốn", "không quên", "duyên phận", "nhân duyên",
    "kiếp trước", "người thầy", "mái trường", "quen thuộc", "xung quanh", "hành trình",
    "ngẫu nhiên", "chúng mình", "những ngày", "những điều", "quan trọng", "không biết",
    "người yêu", "bằng lòng", "chồng yêu", "nhớ nhung", "nhung nhớ", "động viên",
    "thấu hiểu", "thông cảm", "cảm thông", "tình thân", "đồng hành", "cạnh nhau",
    "cùng nhau", "trong tim", "từng ngày", "hạnh phúc", "ngọt ngào", "rung động",
    "rung rinh", "xao xuyến", "thổn thức", "ngóng chờ", "nhẫn cưới", "ánh trăng",
    "tiếng yêu", "chân thật", "thật lòng", "trọn lòng", "trọn kiếp", "vĩnh hằng",
    "nhiều lắm", "trách móc", "hòa thuận", "nhớ nhiều", "nhớ người", "yêu nhiều",
    "chúc mừng", "mong rằng", "mạnh khỏe", "buổi sáng", "lung linh", "vấn vương",
    "thao thức", "ngất ngây", "hiếu thảo", "trọn kiếp", "không rời", "không thể",
    "luôn luôn", "từng phút", "từng giây", "giấc mộng", "chân trời", "cuộc sống",
    "cuộc tình", "tương lai", "định mệnh", "vì thương", "quà 20/10", "tâm huyết",
    "xuất hiện", "bước sang", "ta thường", "chuyến đi", "bừng sáng", "dừng chân",
    "dường như", "anh chẳng", "chúng tôi", "dễ thương", "mang theo", "sinh nhật",
    "quà tặng", "tặng anh", "anh muốn", "cục cưng", "vợ chồng", "trân quý", "chăm sóc",
    "khích lệ", "đồng cảm", "bao dung", "quan tâm", "tình bạn", "tình đầu", "mối tình",
    "tình yêu", "tình cảm", "viên mãn", "trọn vẹn", "mặn nồng", "nồng nàn", "đằm thắm",
    "bên nhau", "của nhau", "với nhau", "vòng tay", "trái tim", "niềm vui", "niềm tin",
    "dịu dàng", "bình yên", "yên bình", "tươi vui", "tràn đầy", "đong đầy", "mong chờ",
    "mong nhớ", "đính hôn", "đám cưới", "hoa hồng", "bầu trời", "ngôi sao", "lời chúc",
    "lãng mạn", "hết lòng", "dốc lòng", "một lòng", "trọn đời", "suốt đời", "vĩnh cửu",
    "bất diệt", "bền chặt", "bền vững", "trăm năm", "giận dỗi", "nũng nịu", "làm nũng",
    "làm lành", "hiểu lầm", "ngủ ngon", "chúc bạn", "chúc anh", "chúc con", "chúc cha",
    "điều ước", "sức khỏe", "xin chào", "tạm biệt", "buổi tối", "ngày mai", "được rồi",
    "thân yêu", "kính yêu", "ơn nghĩa", "tình cha", "gia đình", "suốt đời", "luôn bên",
    "luôn nhớ", "luôn yêu", "mỗi ngày", "mỗi giây", "mỗi phút", "thế giới", "cuộc đời",
    "hiện tại", "duyên số", "kiếp này", "kiếp sau", "đừng rời", "người cô", "tỏa sáng",
    "tuổi mới", "sẵn sàng", "trải qua", "đáng nhớ", "đơn giản", "mỗi sáng", "một phần",
    "thu sang", "sang thu", "trôi qua", "cái lạnh", "rộng lớn", "muôn vàn", "tìm kiếm",
    "dừng lại", "trái đất", "thuộc về", "giữa hơn", "chúng ta", "của mình", "cho mình",
    "yêu mình", "nhưng mà", "đáng yêu", "xinh đẹp", "đẹp nhất", "tốt nhất", "học cách",
    "cần phải", "gập gềnh", "cùng anh", "tự nhiên", "gửi anh", "tặng em", "em muốn",
    "bảo bối", "bạn đời", "đôi lứa", "nửa kia", "một nửa", "anh yêu", "săn sóc", "che chở",
    "sẻ chia", "chia sẻ", "tha thứ", "yêu dấu", "quý mến", "hy sinh", "nồng ấm", "keo sơn",
    "gắn kết", "có nhau", "nắm tay", "cầm tay", "ôm chặt", "nụ cười", "ánh mắt", "con tim",
    "tâm hồn", "ấm cúng", "bồi hồi", "nao nao", "háo hức", "chờ đợi", "đợi chờ", "tỏ tình",
    "cầu hôn", "kết hôn", "lễ cưới", "ánh sao", "lời yêu", "lời hứa", "lời thề", "say đắm",
    "đắm say", "mãi mãi", "mãi yêu", "son sắt", "bền lâu", "lâu dài", "dài lâu", "hờn dỗi",
    "ghen tị", "xin lỗi", "làm hòa", "nhớ quá", "nhớ lắm", "nhớ anh", "yêu lắm", "yêu quá",
    "yêu mãi", "rất yêu", "rất nhớ", "chúc em", "chúc mẹ", "hy vọng", "may mắn", "bình an",
    "an lành", "biết ơn", "gặp lại", "hôm nay", "dạ vâng", "thế nhé", "rạng rỡ", "tình mẹ",
    "con cái", "anh chị", "họ hàng", "công ơn", "sẽ luôn", "mỗi khi", "kỷ niệm", "giấc mơ",
    "quá khứ", "cho anh", "của anh", "với anh", "bên anh", "đừng bỏ", "mãi mãi", "mãi yêu",
    "quà 8/3", "dìu dắt", "tận tụy", "trở nên", "còn anh", "ngắm em", "mùa thu", "mạnh mẽ",
    "sài gòn", "con phố", "nhè nhẹ", "miễn là", "chỉ ước", "bắt đầu", "anh chỉ", "mỗi lần",
    "vô tình", "của mỗi", "dùng cả", "có phải", "gật đầu", "tin vào", "bao giờ", "trở lại",
    "yêu anh", "mệt mỏi", "cùng em", "anh vẫn", "đến thế", "con gái", "gửi em", "tri kỷ",
    "em yêu", "vợ yêu", "bé yêu", "bảo vệ", "gắn bó", "ôm lấy", "cái ôm", "nụ hôn",
    "êm đềm", "vui vẻ", "đầy ắp", "hẹn hò", "bó hoa", "vì sao", "mê đắm", "cả đời",
    "nhớ em", "ước mơ", "vạn sự", "tri ân", "cảm ơn", "mái ấm", "ông bà", "cha mẹ",
    "anh em", "chị em", "hồi ức", "cơn mơ", "bởi vì", "vì anh", "vì yêu", "cho em",
    "của em", "với em", "bên em", "còn em", "Em đến", "bé nhỏ", "đến lạ", "hà nội",
    "mắt em", "lối đi", "đi tìm", "để làm", "sẽ tìm", "đẹp đẽ", "yêu em", "rực rỡ",
    "em vẫn", "vỗ về", "an ủi", "ấm áp", "ấm êm", "si mê", "như ý", "tổ ấm", "ba mẹ",
    "bố mẹ", "ký ức", "vì em", "ở bên", "ở lại", "có em", "là em",
    "nhiều người", "bình thường", "quãng đường",
    "thành công", "quyết định", "vẫn thường", "một khoảng", "năng lượng", "tuyệt vời",
    "chân tình", "chưa chắc", "lạ thường", "chạm phải", "một người", "ngoài kia",
    "giăng đầy", "tận hưởng", "theo cách", "nghỉ ngơi", "mình muốn", "mong muốn",
    "khỏe mạnh", "hiện thực", "hiện diện", "nhẹ nhàng", "xứng đáng", "theo đuổi",
    "con đường", "tôn trọng", "nhộn nhịp", "tia nắng", "nhưng từ", "chẳng sợ", "cánh cửa",
    "lạnh lẽo", "đặc biệt", "bạn rằng", "cảm nhận", "bản thân", "nhìn lại", "hoàn hảo",
    "thật tốt", "tin rằng", "thật đẹp", "hài lòng", "nói rằng", "thư giãn", "mang đến",
    "cảm giác", "mục tiêu", "phong độ", "cảm hứng", "giữ trọn", "mang lại",
    "vắng vẻ", "chỉ cần", "của cậu", "lòng tớ", "lọt qua", "kết quả", "sau này", "cùng tớ",
    "tớ từng", "so sánh", "đi cùng", "nhận về", "sinh ra", "đối với", "của bạn", "lại một",
    "kịp nói", "món quà", "hơn hết", "yêu quý", "thật sự", "để mình", "có thêm", "tốt đẹp",
    "đôi khi", "cảm xúc", "nhận ra", "bạn cảm", "cố gắng", "bất ngờ", "dự định", "cho bạn",
    "suôn sẻ", "cho cận", "làm cho", "thu nhỏ", "nói thế", "nhớ cậu", "thế nào", "có cậu",
    "cậu có", "cậu là", "đi qua", "chỉ sợ", "là một", "để nói", "có thể", "tất cả",
    "đã qua", "bạn có", "mà bạn", "cơ hội", "đối xử", "sau đó", "nào đó", "đủ tốt",
    "phụ nữ", "tự tin", "vất vả", "đó nha",

    // --- Nhóm 1 từ (76 mục) ---
    "chuyện", "nguyện", "thương", "trước", "chồng", "ngược", "khiến", "tương", "nghĩa",
    "chiều", "chuẩn", "giăng", "chúng", "những", "người", "không", "trong", "nhưng",
    "thích", "ngoan", "chính", "thành", "nhiều", "nhanh", "ngang", "ngoài", "tháng",
    "quản", "hoàn", "ngọt", "chạm", "chắc", "đúng", "rảnh", "xong", "chưa", "đang", "tiếp",
    "dừng", "muộn", "phải", "bỗng", "được", "cũng", "luôn", "nghĩ", "cười", "khóc", "buồn",
    "xinh", "mong", "thêm", "trên", "dưới", "chậm", "chọn", "chạy", "đứng", "ngồi", "hoặc",
    "khác", "bằng", "muốn", "thấy", "biết", "ngày", "mình", "nghe", "nhìn", "quay", "giúp",
    "dành", "chút", "thời", "gian", "việc",
];

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const MAX_PER_GROUP = ALPHABET.length * ALPHABET.length; // 676 mã / nhóm
const WORD_TO_CODE = new Map();
const CODE_TO_WORD = new Map();

// LƯU Ý QUAN TRỌNG: mã được gán theo THỨ TỰ trong 2 danh sách phía trên.
// Chỉ được THÊM từ mới vào CUỐI danh sách. Chèn/xóa/đổi chỗ sẽ làm lệch mã
// và các đoạn đã nén trước đó sẽ giải nén ra sai chữ.
(function buildDictionary() {
    const norm = w => w.normalize("NFC").toLowerCase().trim();
    const seen = new Set();

    function addGroup(list, prefix, label) {
        let index = 0;
        for (const raw of list) {
            const word = norm(raw);
            if (word.length < 4 || seen.has(word)) continue;

            if (index >= MAX_PER_GROUP) {
                if (typeof console !== "undefined") {
                    console.warn("[Keypans] " + label + " vượt " + MAX_PER_GROUP + " mã, bỏ qua từ: " + word);
                }
                break;
            }
            const code = prefix + ALPHABET[Math.floor(index / 26)] + ALPHABET[index % 26];

            seen.add(word);
            index++;
            WORD_TO_CODE.set(word, code);
            CODE_TO_WORD.set(code, word);
        }
    }

    addGroup(SHORT_WORDS, "_", "SHORT_WORDS"); // 1. Bắt đầu bằng dấu _
    addGroup(LOVE_WORDS, "*", "LOVE_WORDS");   // 2. Bắt đầu bằng dấu *
})();

// ---- Xử lý hoa/thường: mã hóa bằng kiểu chữ của 2 ký tự sau tiền tố ----
const capFirst = w => w.charAt(0).toUpperCase() + w.slice(1);
const capEach = w => w.split(" ").map(capFirst).join(" ");

function caseVariants(word) {
    return [
        ["ll", word],
        ["Ul", capFirst(word)],
        ["UU", word.toUpperCase()],
        ["lU", capEach(word)]
    ];
}

const WORD_CLASS = "[\\p{L}\\p{N}_]";

// Sắp xếp theo độ dài giảm dần để ưu tiên.
const COMPRESS_REGEX = new RegExp(
    "(^|[^\\p{L}\\p{N}_])(" +
    [...WORD_TO_CODE.keys()]
        .sort((a, b) => b.length - a.length)
        .map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|") +
    ")(?!" + WORD_CLASS + ")",
    "giu"
);

//Trả về null nếu kiểu hoa/thường KHÔNG thể khôi phục
function encodeMatch(match) {
    const key = match.toLowerCase();
    const code = WORD_TO_CODE.get(key);
    if (!code) return null;

    for (const [mask, form] of caseVariants(key)) {
        if (form === match) {
            const c1 = mask[0] === "U" ? code[1].toUpperCase() : code[1];
            const c2 = mask[1] === "U" ? code[2].toUpperCase() : code[2];
            return code[0] + c1 + c2;
        }
    }
    return null;
}

/**
 * Nén văn bản Tiếng Việt dựa trên từ điển Keypans
 */
function compressWithDictionary(text) {
    if (!text) return "";
    return text
        .normalize("NFC")
        .replace(/[*_]/g, c => c + c) // Escape các ký tự đặc biệt * và _ sẵn có trong chuỗi gốc
        .replace(COMPRESS_REGEX, (full, sep, match) => {
            const encoded = encodeMatch(match);
            return encoded === null ? full : sep + encoded;
        });
}

/**
 * Giải nén văn bản về lại Tiếng Việt nguyên bản
 */
function decompressWithDictionary(text) {
    if (!text) return "";
    return text.replace(/\*\*|__|(_|\*)[a-zA-Z]{2}/g, (token) => {
        if (token === "**") return "*";
        if (token === "__") return "_";

        const prefix = token[0];
        const chars = token.slice(1);
        const word = CODE_TO_WORD.get(prefix + chars.toLowerCase());

        if (!word) return token;

        const c1Upper = chars[0] !== chars[0].toLowerCase();
        const c2Upper = chars[1] !== chars[1].toLowerCase();

        if (c1Upper && c2Upper) return word.toUpperCase();
        if (c1Upper) return capFirst(word);
        if (c2Upper) return capEach(word);
        return word;
    });
}

/**
 * Kiểm tra nén -> giải nén có khôi phục đúng văn bản.
 */
function verifyRoundTrip(text) {
    const expected = (text || "").normalize("NFC");
    return decompressWithDictionary(compressWithDictionary(text)) === expected;
}

// Xuất Module hỗ trợ cả Node.js và Browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = { compressWithDictionary, decompressWithDictionary, verifyRoundTrip, WORD_TO_CODE, CODE_TO_WORD };
} else if (typeof window !== "undefined") {
    window.Keypans = { compressWithDictionary, decompressWithDictionary, verifyRoundTrip, WORD_TO_CODE, CODE_TO_WORD };
}
