/**
         * ======================================
         * Description: Handles main user interface logic & Vietnamese Text Compression
         * Author: Devpan
         * Created: 2026-01-01
         * ======================================
         */

        // Danh sách từ ngắn phổ biến (Nhóm 1: Tiền tố _)
        const SHORT_WORDS = [
            // --- Nhóm tiếng anh ---
            "i love you", "love you", "happy birthday", "miss you", "i miss you", "take care", "merry christmas", "happy new year",
            "galaxy", "noel này", "Merry Christmas & Happy New Year",
            
            // --- Nhóm lời chúc ngắn  ---
            "chúc bạn một mùa Giáng sinh an lành", "ấm áp và ngập tràn tiếng cười bên những người thân yêu",
            "một mùa Giáng sinh an lành", "có một đêm Noel thật lung linh", "nhận được nhiều quà và năm mới sắp tới vạn sự hanh thông",
            "giáng sinh vui vẻ nhé", "luôn tràn đầy năng lượng tích cực, công việc thuận lợi và lúc nào cũng rạng rỡ",
            "mong mọi điều ước tốt đẹp nhất", "trong mùa lễ hội này đều sẽ trở thành hiện thực",
            "chúc cả nhà mình một mùa Giáng sinh an lành", "mạnh khỏe và luôn đong đầy hạnh phúc",
            "một mùa lễ hội rực rỡ và một năm mới bình an", "ấm áp và một năm mới gặt hái nhiều thành công rực rỡ",
            "và gia đình một năm mới bình an, dồi dào sức khỏe, vạn sự như ý và ngập tràn niềm vui",
            "năm mới khởi đầu mới", "luôn giữ vững năng lượng tích cực, gặt hái thật nhiều thành công và may mắn trên mọi chặng đường",
            "chúc mừng năm mới tình yêu của", "vì đã đồng hành cùng nhau suốt năm qua", 
            "mong rằng năm mới này chúng ta sẽ tiếp tục nắm tay nhau đi qua thật nhiều khoảnh khắc hạnh phúc",
            "năm mới đến rồi", "điều ước lớn nhất của anh/em vẫn là được nhìn thấy", "luôn vui vẻ, bình an",
            "một năm mới thật rực rỡ và ngọt ngào", "có nhiều cơ hội hơn để được ở cạnh",
            "bạn tuổi mới luôn tràn đầy năng lượng, công việc thuận lợi, tiền vào như nước và lúc nào cũng rạng rỡ, vui vẻ",
            "tuổi mới, chúc bạn bớt âu lo, thêm nhiều niềm vui, sớm đạt được mọi mục tiêu và ước mơ đang ấp ủ nhé",
            "tuổi mới sẽ mang đến cho bạn thật nhiều cơ hội mới, những chuyến đi thú vị và luôn bình an, hạnh phúc",
            "một tuổi rồi đấy, chúc bạn năm nay ăn mãi không béo, ngủ mãi không muộn và sớm thoát ế nhé",
            

            // --- Nhóm 7,8.. từ ---
            "anh muốn thấy nụ cười của em", "em muốn thấy nụ cười của anh",
            "anh muốn cùng em đi khắp nơi", "em muốn cùng anh đi khắp nơi",
            "anh muốn nói là anh yêu em", "anh muốn ở bên em mãi mãi", "em muốn ở bên anh mãi mãi",
            "em muốn nói là em yêu anh", "đạt được mọi ước mơ em đang theo đuổi",
            "mang lại hạnh phúc trọn vẹn nhất cho em", "mang lại hạnh phúc trọn vẹn nhất cho anh",
            "lúc nào cũng tràn đầy năng lượng", "nhiệt huyết để tiếp tục chèo lái",
            "anh đã là điều tuyệt vời nhất", "em đã là điều tuyệt vời nhất",
            "chúc tình yêu của chúng ta", "bận rộn hay lạnh giá đến đâu",
            "mở ra một hành trình mới rực rỡ hơn", "chúc mọi điều tốt đẹp nhất sẽ đến với",
            "mong rằng trong những ngày", "mà nhiều mùa lễ hội sau nữa",
            "thật nhiều niềm vui cùng những khoảnh khắc ý nghĩa",
            "chúc mừng sinh nhật người đặc biệt nhất",  "tương lai đẹp nhất chính là tương lai",
            "cảm ơn vì đã luôn lắng nghe và đồng hành cùng nhau", "cảm giác thích một người thật lòng",
            "qua bao nhiêu chuyện trên đời", "gia đình mình mãi hạnh phúc bên nhau",
            "bước sang tuổi mới thật nhiều sức khỏe", "khi cả hai cùng nhìn về một hướng",
            "mọi giông bão ngoài kia đều trở nên nhỏ bé", "người ta thường nói tình yêu đẹp nhất",
            "dù có quay đầu lại ở bất kỳ thời điểm nào", "một ngôi nhà nhỏ đầy ắp tiếng cười",
            "cảm ơn sự sắp đặt kỳ diệu của số phận đã đưa hai đứa mình đến bên nhau", 
            "năm tháng có làm chúng ta thay đổi ra sao", "ánh mắt ta nhìn nhau vẫn sẽ vẹn nguyên",
            "sự ấm áp và rung động như những ngày đầu tiên", "đó là sau một ngày dài mệt mỏi",
            "với hàng tá áp lực và lo toan ngoài xã hội", "ở đây chờ đợi và lắng nghe mình",
            "mình đã làm được bao nhiêu việc tốt", "mà kiếp này lại may mắn gặp được một người",
            "không cần phải gồng mình lên để trở nên hoàn hảo", "tình yêu không phải là một gánh nặng",
            "cũng chẳng cần phải giấu đi những yếu đuối của bản thân", "điều ước lớn nhất của bản thân",
            "mà là nơi để cả hai cùng tựa vào nhau và lớn lên mỗi ngày","bất giác mỉm cười khi thấy tin nhắn",
            " điều ước lớn nhất của bản thân hiện tại là gì", "câu trả lời chắc chắn vẫn chỉ xoay quanh",
            "luôn vạch ra những nguyên tắc rõ ràng cho cuộc sống của mình", "lại dịu dàng và ngọt ngào đến thế",
            "cảm giác thích một người thật lòng lại dịu dàng và ngọt ngào đến thế", 
            "nhận ra trái tim mình đã lỡ nhịp", "là một người rất tin vào lý trí",
            "để ý đến những điều nhỏ nhặt nhất", "bầu trời hôm nay có thể nhiều mây",
            "cơn gió ngoài kia có thể hơi se lạnh", "lúc này lại ấm áp lạ thường",
            "không giỏi nói những lời hoa mỹ", "cũng chẳng biết cách bày tỏ tình cảm sao cho thật khéo léo",
            "chỉ biết rằng mỗi khoảnh khắc trôi qua", "lại lớn thêm một chút", "hy vọng rằng một ngày không xa",
            "sẽ có đủ dũng khí và cơ hội để chính thức được gọi",

            // --- Nhóm 6 từ ---
            "anh muốn ôm em thật chặt", "em muốn ôm anh thật chặt", "anh muốn bên em trọn đời",
            "em muốn bên anh trọn đời", "phụ nữ là để yêu thương", "gửi lời tri ân chân thành",
            "nụ cười rạng rỡ trên môi", "sự biết ơn sâu sắc nhất", "thành công trên mọi chặng đường",
            "người phụ nữ đặc biệt nhất", "mà còn vì sự tận tụy", "ngọn lửa đam mê với nghề",
            "chúng ta sẽ có thêm nhiều dịp", "noel là dịp để ông già", "kể từ khi có sự xuất hiện của",
            "có một ứng cử viên cực kỳ tiềm năng", "cảm ơn em vì đã đến", "cả ơn cậu vì đã đến",
            "cảm ơn anh vì đã đến", "người phụ nữ tuyệt vời nhất", "người đàn ông tuyệt vời nhất",
            "điều hạnh phúc nhất chính là", "bao dung và nắm chặt lấy tay", "đã không ngại những khuyết điểm",
            "trên thế giới rộng lớn này", "hai tâm hồn xa lạ tìm thấy nhau", "trên đời này là gì không",
            "nhận ra rằng vẫn luôn có một người", "liều thuốc chữa lành mọi vết xước trong lòng",
            "chỉ cần nghĩ đến nụ cười của","là bao nhiêu muộn phiền trong", "hóa ra khi yêu đúng người",
            "mọi rào cản và nguyên tắc", "sụp đổ không một tiếng động", 

            
            // --- Nhóm 5 từ ---
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
            "làm thế giới rực rỡ", "đón tuổi mới vui vẻ", "anh sẽ luôn bên em", "và là điểm tựa",
            "em sẽ luôn bên anh", "mãi mãi ở bên nhau", "tặng em một bó hoa", "anh muốn ở bên em",
            "em muốn ở bên anh", "cho dù có thế nào", "hãy ở bên anh nhé", "cần gì nến và hoa",
            "hãy ở bên em nhé", "cảm ơn vì tất cả", "có một kỳ nghỉ lễ", "cảm ơn vì đã đến",
            "chúc mọi điều tốt đẹp", "chúc một ngày tốt lành", "anh muốn nói là",
            "có thêm nhiều thời gian", "tất cả tình yêu thương", "đã tận tình chỉ dạy",
            "thành công trong công việc", "những lời chúc tốt đẹp", "tình yêu thương bao la",
            "lời chúc mừng chân thành", "đã dành cho chúng em", "tri ân sâu sắc nhất",
            "bao thế hệ học trò", "những chuyến đò tri thức", "sự cống hiến thầm lặng",
            "mang lại cho cuộc sống", "chúc bạn có một mùa", "bên những người thân yêu",
            "bình an và hạnh phúc", "đông se lạnh sắp tới", "trở về bên mâm cơm", 
            "ấm áp và an lành", "hay đi dạo cùng nhau hơn", "luôn giữ nụ cười tỏa nắng",
            "cơ hội được đồng hành", "gửi lời chúc này đến", "nhận được thật nhiều quà",
            "và luôn vui vẻ nhé", "mang đến cho cuộc sống", "đạt được mọi ước mơ", 
            "đạt được mọi mơ ước", "lúc nào cũng giữ nụ cười tươi trên môi",
            "lúc nào cũng giữ nụ cười", "dù có chuyện gì xảy ra", "đồng hành và ủng hộ",
            "chúc một ngày sinh nhật", "nhân ngày đặc biệt này", "chẳng mong gì hơn ngoài việc",
            "luôn dồi dào sức khỏe",  "tất cả sự hy sinh", "yêu thương vô điều kiện",
            "một ngày sinh nhật thật", "ấm áp và trọn vẹn", "nhiều thành công rực rỡ",
            "dịu dàng và ấm áp", "chỉ cần ở cạnh anh", "chỉ cần ở cạnh em", "chỉ cần ở cạnh cậu",
            "cho đến khi gặp được", "nếu cuộc đời là một", "giữa dòng đời vội vã", 
            "thấu hiểu từng suy nghĩ", "chưa kịp nói thành lời", "thực sự là một phép màu",
            "cảm giác bình yên nhất", "nghe giọng nói ấm áp", "nếu có ai đó hỏi",
            "trải qua thật nhiều mùa", "xuân, hạ, thu, đông", "đi đến những vùng đất mới",
            "ăn những món ăn ngon", "luôn có sự hiện diện của", "một người rất tin vào", 
            "thế nhưng từ ngày gặp", "hiện lên trên màn hình", "từ lúc nào không hay",
            

            // --- Nhóm 4 từ  ---
            "khai trương hồng phát", "an khang thịnh vượng", "ngọn lửa nhiệt huyết", "tinh thần lạc quan",
            "sống thật vui vẻ", "suốt thời gian qua", "niềm vui, hạnh phúc", "con đường sự nghiệp",
            "uống nước nhiều vào", "ngập tràn hạnh phúc", "tình làng nghĩa xóm", "yêu cậu thật nhiều",
            "thuận buồm xuôi gió", "chúc mừng sinh nhật", "tuổi mới thành công", "yêu anh thật nhiều",
            "một chặng đường dài", "bách niên giai lão", "trăm năm hạnh phúc", "yêu em thật nhiều",
            "bền chặt ngọt ngào", "buổi sáng tốt lành", "tìm đường vào tim", "ngôi sao sáng nhất",
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
            "em luôn nhớ anh", "anh luôn yêu em", "em luôn yêu anh", "không thể sống thiếu",
            "không thể thiếu em", "không thể thiếu anh", "em là tất cả", "anh là tất cả",
            "ôm em thật chặt", "ôm anh thật chặt", "anh xin lỗi em", "em xin lỗi anh",
            "đời này kiếp này", "trọn đời bên nhau", "công lao to lớn", "kính chúc thầy cô",
            "kính chúc cha mẹ", "kính chúc ông bà", "ông bà mạnh khỏe", "tình bạn bền lâu",
            "chúc mừng giáng sinh", "giáng sinh vui vẻ", "năm mới vui vẻ", "năm mới hạnh phúc",
            "mọi điều tốt đẹp", "cảm ơn rất nhiều", "cảm ơn mọi người", "năng lượng tích cực",
            "em đang theo đuổi", "mang lại hạnh phúc", "anh chúc em luôn", "anh hứa sẽ luôn",
            "đã luôn lắng nghe", "con xin gửi đến", "dồi dào sức khỏe", "vất vả ngược xuôi",
            "đến các thầy cô", "chuyến đò tri thức",  "có một ngày lễ", "nền tảng vững chắc",
            "công việc thuận lợi", "làm việc hiệu quả", "luôn nở nụ cười", "và yêu thương em",
            "làm cho cuộc sống", "trở nên ngọt ngào", "kiến thức quý báu", "hành trang theo em",
            "ngọn lửa đam mê", "cống hiến thầm lặng", "cập bến thành công", "nguồn động lực lớn",
            "vững bước vươn xa", "luôn luôn mạnh khỏe", "sự nghiệp trồng người", "em xin gửi lời", 
            "giáng sinh năm nay", "điều tuyệt vời nhất", "đã luôn bên cạnh", "thật nhiều tiếng cười",
            "lời chúc sức khỏe", "tràn ngập yêu thương", "hạnh phúc lớn nhất", "mang đến cho bạn", 
            "tha lỗi cho anh", "tha lỗi cho em", "có anh ở đây", "có em ở đây", "nụ cười rạng rỡ",
            "dành riêng cho em", "dành riêng cho anh", "tràn đầy năng lượng", "biết bao buồn vui",
            "hạnh phúc bên nhau", "em xin kính chúc", "dìu dắt chúng em", "mạnh khỏe, hạnh phúc",
            "ngủ sớm đi nhé", "cho anh xin số", "thả tim cho em", "biết ơn cha mẹ", "gia đình tự hào",
            "vạn sự bình an", "tri ân thầy cô", "anh lại tự hỏi", "cho em xin số", "chỗ dựa ấm áp",
            "tỏ ra mạnh mẽ", "vạn sự như ý", "bao nhiêu năm nữa", "điều gì xảy ra", "tớ mới nhận ra",
            "cảm ơn vì đã", "bất cứ lúc nào", "bất cứ điều gì", "anh yêu em nhất", "cuộc sống của anh",
            "em yêu anh nhất", "anh rất nhớ em", "em rất nhớ anh", "anh luôn nhớ em", "cuộc sống của em",
            "vì sự hiện diện", "giáng sinh an lành", "trong cái se lạnh", "gửi đến bố mẹ",
            "thật nhiều may mắn", "hết những muộn phiền", "chúc cho công việc", "ánh đèn lấp lánh", 
            "ví tiền rủng rỉnh", "nhận được nhiều quà", "luôn giữ nụ cười", "tối nay nếu chưa",
            "một người đặc biệt", "người đó chính là", "trở nên đặc biệt", "vì đã mang đến", 
            "gửi lời chúc đến", "thật nhiều niềm vui", "khoảnh khắc ý nghĩa", "bước sang tuổi mới",
            "vẫn luôn ở đây", "thêm một tuổi mới", "tiền vào như nước", "nhan sắc thăng hạng", 
            "tuổi mới rực rỡ", "nụ cười của em", "mọi chuyện sẽ ổn", "giữ gìn sức khỏe", "hẹn gặp lại nhé",
            "rất vui được gặp", "cảm ơn bạn nhiều", "chúc mừng nhé", "cố lên nào bạn", "đừng lo quá nhé",
            "đi làm vui vẻ", "đang ở đâu đấy", "hôm nay thế nào", "gia đình hạnh phúc", "tri ân chân thành",
            "vô cùng quý giá", "sự nghiệp thăng tiến", "anh mong em luôn", "em mong anh luôn", 
            "của cuộc đời anh", "của cuộc đời em", "của cuộc đời tớ", "xinh đẹp, tự tin", "tự tin, xinh đẹp",
            "cùng anh trải qua", "cùng em trải qua", "thời tin in trên", "yêu quý của con", 
            "mỗi ngày trôi qua", "nuôi dạy chúng con", "trong cuộc đời con", "khôn lớn nên người",
            "ngoại lệ duy nhất", "chiếc sạc dự phòng", "đầy ắp năng lượng", "bông nhiên dừng lại",
            "yêu thương mà tớ", "ở cạnh gia đình", "kỷ niệm đáng nhớ","bận lòng lo lắng",
            "yêu thương mà anh","yêu thương mà vợ", "cuộc sống của tớ", "tớ mong cậu luôn",
            "thế giới ngoài kia", "bông nhiên dường lại", "bỗng nhiên dừng lại", "trở nên rực rỡ",
            "như một giấc mơ", "một người hoàn hảo", "dùng cả thanh xuân", "chẳng cần làm gì",
            "dạo này trí nhớ", "làm gì cũng quên", "nhưng có một điều", "bầu trời hôm nay",
            "lại đẹp đến thế", "chỉ toàn phản chiếu", "người rất lý trí", "anh hứa sẽ dành",
            "em hứa sẽ dành", "tớ hứa sẽ dành", "mình hứa sẽ dành","gặp được người khiến", 
            "trở nên vô nghĩa", "trên trái đất này", "nắm chặt tay nhau", "giữa hàng tỷ người", 
            "nhiều như thế này", "chúng ta vô tình", "mọi thứ xung quanh", "tình yêu đẹp nhất",
            "sự vụng về của", "chỉ cần có em", "chỉ cần có anh", "mong rằng sau này",
            "được trở về nhà", "bỗng chốc tan biến", 
        ];

        // Danh sách từ ngắn phổ biến (Nhóm 2: Tiền tố *)
        const LOVE_WORDS = [

            // --- Nhóm 3 từ  ---
            "từng khoảnh khắc", "chặng đường phía", "không thể thiếu", "niềm hạnh phúc", 
            "tuần trăng mật", "chào buổi sáng", "nghĩa thầy trò", "dù chặng đường", "làn gió mới",
            "sinh nhật thật", "dành tặng anh", "đôi uyên ương", "anh thương em", "em thương anh",
            "tay trong tay", "nhẫn đính hôn", "chào buổi tối", "chúc ngủ ngon", "có rảnh không",
            "xong chưa vậy", "mệt lắm không", "không sao đâu", "tình đồng đội", "không bao giờ",
            "ngày đặc biệt", "thêm tuổi mới", "đáng nhớ nhất", "thuộc về nhau", "gửi tặng anh",
            "dành tặng em", "niềm hy vọng", "mãi bên nhau", "đừng lo lắng", "về chung nhà", "sau cánh cửa",
            "người lái đò", "đón tuổi mới", "làm tan biến", "từng góc phố", "dù sau này", "mỗi khi anh",
            "từng con phố", "yêu mình anh", "gửi tặng em", "tặng anh nè", "gửi anh yêu", "mỗi khi em",
            "gửi đến anh", "anh muốn em", "em muốn anh", "mối quan hệ", "lời tỏ tình", "mệt mỏi nhất",
            "đến mãi mãi", "đến bạc đầu", "hẹn gặp lại", "ăn cơm chưa", "tốt lắm rồi", "cho chúng con",
            "vui lên nào", "hẹn gặp sau", "tình mẫu tử", "tình phụ tử", "tình anh em", "vệt thời gian",
            "ngày phụ nữ", "bắt đầu một", "một cơn gió", "sớm gặp được", "hay những ngày", "không còn phải",
            "chỉ ước một", "vẫn hay nói", "yêu mình em", "mãi yêu anh", "tặng em nè", "gửi em yêu",
            "gửi đến em", "anh muốn ở", "anh nhớ em", "em nhớ anh", "anh yêu em", "em yêu anh", "để chúng con",
            "anh cần em", "em cần anh", "lời cảm ơn", "cảm ơn anh", "đi đâu đấy", "sự ngọt ngào", "đôi bàn tay",
            "đợi tí nhé", "cố lên nhé", "anh chị em", "cả đời này", "ơn thầy cô", "chỉ cần là", "con càng thương",
            "em hãy nhớ", "qua tất cả", "một bó hoa", "góc phố ấy", "vào mắt em", "chỉ cần em", "mái tóc của",
            "tin vào sự", "anh tự hỏi", "có thế nào", "mãi yêu em", "em muốn ở", "cảm ơn em", "mọi mơ ước",
            "để anh lo", "có ra sao", "anh ở đây", "một ai đó", "mọi ồn ào", "vì đã đến", "của cuộc đời",
            "để em lo", "không lối thoát", "khiến mình vui", "vừa bằng đúng", "mọi giông bão", "tuyệt vời nhất",
            "cậu giống như", "hãy cho phép", "làm tan chảy", "không chỉ là", "nghĩ đến cậu", "đã xuất hiện",
            "thực ra lại", "không ồn ào", "gửi đến bạn", "như thế nào", "bạn sẽ nhận", "sự trân trọng",
            "bạn có thể", "một lý do", "mà còn là", "mà có lẽ", "hãy nhớ rằng", "chúc em yêu", "và cùng anh",
            "chúc may mắn", "chúc bình an", "ngày nhà giáo", "ngày của mẹ", "chúc anh yêu", "trọn vẹn nhất",
            "bạn khỏe không", "có chuyện gì", "chuyện gì vậy", "tan làm chưa", "người phụ nữ", "cuộc đời con",
            "đến nơi chưa", "về nhà chưa", "nhớ ăn cơm", "nhớ uống nước", "những kỷ niệm", "gia đình mình",
            "nhớ giữ ấm", "cẩn thận nhé", "đừng thức khuya", "ngủ sớm nhé", "nhất cuộc đời", "chúc mừng ngày",
            "nghỉ ngơi nhé", "nhắn tin cho", "xin lỗi nhé", "mình xin lỗi", "anh chúc em", "em chúc anh",
            "không có gì", "không sao cả", "đừng khách sáo", "tuyệt vời quá", "chúc em luôn", "chúc anh luôn",
            "tất nhiên rồi", "chắc chắn rồi", "để mình xem", "mình hiểu rồi", "luôn lắng nghe", "bao buồn vui",
            "mình biết rồi", "mình không biết", "theo mình thì", "thực sự là", "trong cuộc sống","bình an nhé",
            "tóm lại là", "ngay bây giờ", "một lát nữa", "hẹn mai gặp", "luôn bên em", "mọi ước mơ","nhớ mang áo",
            "mai gặp nhé", "chào mọi người", "chào các bạn", "chào buổi chiều", "từ đáy lòng", "ngủ ngon nhé",
            "làm người yêu", "làm bạn gái", "làm bạn trai", "đừng giận anh", "cả cuộc đời", "cảm nhận được",
            "đừng giận em", "đừng buồn nữa", "đừng khóc nữa", "gửi đến mẹ", "trong cuộc đời", "hoa và quà",
            "gửi đến thầy", "con yêu mẹ", "con yêu ba", "con chỉ mong", "mãi hạnh phúc", "cuộc đời anh",
            "cảm ơn ba", "cảm ơn thầy", "ơn sinh thành", "ơn dưỡng dục", "bình yên nhất", "và nhất là",
            "bạn thân yêu", "tình bạn đẹp", "nơi ủng hộ", "luôn bình an", "đã tận tình", "cuộc đời em",
            "luôn mạnh khỏe", "luôn giữ vững", "ngập tràn hoa", "đặc biệt nhất", "thật xinh đẹp", 
            "yêu em nhiều", "yêu anh nhiều", "hơn mỗi ngày", "thật hạnh phúc", "nhiều niềm vui",
            "luôn tươi tắn", "tình yêu thương", "xin gửi đến", "sâu sắc nhất", "suốt chặng đường",
            "chỉ vì những", "những bài học", "dìu dắt của", "bên gia đình", "nguồn động lực",
            "ngày tôn vinh", "thầy cô giáo", "thật trọn vẹn", "và ý nghĩa", "một đại dương",
            "đã trao tặng", "một bầu trời", "những yêu thương", "lặng lẽ trôi", "thêm món quà",
            "anh đã luôn", "đông lạnh giá", "chúc tình yêu", "của chúng ta", "luôn ấm áp", 
            "không chỉ trong", "rất nhiều mùa", "mà còn ở", "nữa lại về", "thấy mọi người",
            "của năm cũ", "thật ấm áp", "tin nhắn này", "len lỏi đến", "nhưng hy vọng", "những con phố",
            "đã ước có", "luôn vui vẻ", "thật rạng rỡ", "xin một chỗ", "mà nhiều mùa", "đi dạo quanh",
            "thì đừng buồn", "luôn xinh đẹp", "bớt suy nghĩ", "cuộc sống này", "đã ban tặng",
            "có những ngày", "người anh yêu", "người em yêu", "người tớ yêu", "thương lắm luôn",
            "mẹ tự hào", "cha tự hào", "bố tự hào", "mẹ đã dành", "cha đã dành", "bố đã dành",
            "anh đã dành", "em đã dành", "cậu đã dành", "mẹ luôn là", "bố luôn là", "cha luôn là",
            "anh luôn là", "em luôn là", "cậu luôn là", "ồn ào quá", "ở cạnh em", "ở cạnh anh",
            "em chính là", "anh chính là", "bình thường nhất", "người ta thường", "chỉ mất đúng",
            "nhất là anh", "nhất là em", "ở bên anh", "ở bên em", "ở bên cậu", "để nhận ra",
            "chỉ cần được", "nắm tay anh", "nắm tay cậu", "nắm tay em", "ở bên bạn", "nắm tay bạn",
            "đi dạo qua", "thế là đủ", "cho định nghĩa", "kể vài câu", "trong tâm trí", "hết thuốc chữa",
            "càng hiện lên", "rõ nét hơn", "chắc là anh", "chắc là em", "chắc là tớ", "anh có biết",
            "em có biết", "cậu có biết", "bạn có biết", "trong anh mắt", "cũng chẳng phải",
            "em vốn là", "anh vốn là", "rung động trước", "lại dịu dàng", "mọi nguyên tắc",
            "cho đến khi", "của bản thân",  "cuốn tiểu thuyết", "không dám hứa", "để yêu thương",
            "dành trọn cả", "người mình thương", "nếu cuộc đời", "cả thế giới", "bảo vệ em",
            "bảo vệ anh","bảo vệ cậu", "lướt qua nhau", "như thế này", "đã là duyên", "không bỏ lỡ",
            "nắm chặt tay", "có cơ hội", "được thương em", "việc dừng lại", "mới chính là",
            "trước khi gặp", "sự xuất hiện", "giống như một", "trong tâm hồn", "sự chân thành", 
            "thế gian này", "những chuỗi ngày", "người đầu tiên", "chọn ở lại", "có đôi khi",
            "ngồi một mình", "và nghĩ lại", "của riêng mình",

            // --- Nhóm 2 từ ---
            "thoang thoảng", "người thương", "chiều chuộng", "nuông chiều", "nhường nhịn", "lo lắng",
            "tình thương", "cuồng nhiệt", "bâng khuâng", "thân thương", "khoảnh khắc", "in trên",
            "luôn thương", "những người", "người tình", "mến thương", "trân trọng", "thương nhớ",
            "nhớ thương", "khoan dung", "yêu thương", "thương yêu", "tình nghĩa", "thắm thiết",
            "lời nguyện", "chân thành", "thủy chung", "chung thủy", "chung thuỷ", "thật nhiều",
            "ghen tuông", "thương lắm", "rất thương", "ước nguyện", "người thân", "thân thiết",
            "kính trọng", "nghĩa tình", "không muốn", "không quên", "duyên phận", "nhân duyên",
            "kiếp trước", "người thầy", "mái trường", "quen thuộc", "xung quanh", "hành trình",
            "ngẫu nhiên", "chúng mình", "những ngày", "những điều", "quan trọng", "không biết",
            "nhân ngày", "việt nam", "em xin", "anh xin", "kiên nhẫn", "trao cho", "tri thức",
            "bài học", "vô cùng", "kính chúc", "mãi giữ", "sự nghiệp", "cao quý","mình chúc", 
            "dồi dào", "ủng hộ", "chào đón", "công việc", "thuận lợi", "thăng tiến", "và làm",
            "giữ vững", "vẫn luôn", "một ngày", "làn gió", "anh mong", "em mong", "sống thật",
            "em luôn", "cậu luôn", "mà anh", "dành riêng", "sau nữa", "đạt được", "đã luôn",
            "lắng nghe", "anh hứa", "nhìn những", "thời gian", "bàn tay", "chúng con", "nhiều hơn",
            "mái tóc", "sống vui", "sống khỏe", "tự hào", "của con", "con chỉ", "trên môi", "bùng nổ",
            "đã dành", "khôn lớn", "nên người", "luôn là", "nuôi dạy", "mẹ luôn", "ngược xuôi","anh luôn",
            "chúng em", "nghề giáo", "và luôn", "trẻ trung", "tích cực", "toàn thể", "chặng đường",
            "ngập tràn", "hiệu quả", "đời anh", "đã đến", "ý nghĩa", "nhà giáo", "làm người", "quý giá",
            "bục giảng", "trồng người", "gửi lời", "nhiệt huyết", "tiếp tục", "chuyến đò", "cống hiến",
            "thầm lặng", "chính là", "cửa hàng", "mừng ngày", "nhà trường", "nhân tiện", "chiến hữu",
            "chẳng cần", "về sau", "tiếng cười", "nhắn tin", "ngay đây", "cùng những", "lung tung",
            "gặt hái", "thành phố", "dòng người", "bão giông", "anh chúc", "em chúc", "tờ chúc",
            "lớn nhất", "tươi cười", "một mùa", "của đêm", "hanh thông", "lễ hội", "đường phố", 
            "đông lắm", "để chúc", "trò chuyện", "vẫn kịp", "thực hiện", "nghĩ về", "nghe nói",
            "người yêu", "bằng lòng", "chồng yêu", "nhớ nhung", "nhung nhớ", "động viên",
            "thấu hiểu", "thông cảm", "cảm thông", "tình thân", "đồng hành", "cạnh nhau",
            "cùng nhau", "trong tim", "từng ngày", "hạnh phúc", "ngọt ngào", "rung động",
            "rung rinh", "xao xuyến", "thổn thức", "ngóng chờ", "nhẫn cưới", "ánh trăng",
            "tiếng yêu", "chân thật", "thật lòng", "trọn lòng", "trọn kiếp", "vĩnh hằng",
            "nhiều lắm", "trách móc", "hòa thuận", "nhớ nhiều", "nhớ người", "yêu nhiều",
            "chúc mừng", "mong rằng", "mạnh khỏe", "buổi sáng", "lung linh", "vấn vương",
            "thao thức", "ngất ngây", "hiếu thảo", "không rời", "không thể", "còn phải",
            "luôn luôn", "từng phút", "từng giây", "giấc mộng", "chân trời", "cuộc sống",
        ];

        // Nhóm từ mới với dấu # (Nhóm 3: Tiền tố #)
        const OTHER_WORDS = [
            // --- Nhóm 2 từ ---
            "cuộc tình", "tương lai", "định mệnh", "vì thương", "quà 20/10", "tâm huyết",
            "xuất hiện", "bước sang", "ta thường", "chuyến đi", "bừng sáng", "dừng chân",
            "dường như", "anh chẳng", "chúng tôi", "dễ thương", "mang theo", "sinh nhật",
            "quà tặng", "tặng anh", "anh muốn", "cục cưng", "vợ chồng", "trân quý", "chăm sóc",
            "khích lệ", "đồng cảm", "bao dung", "quan tâm", "tình bạn", "tình đầu", "mối tình",
            "tình yêu", "tình cảm", "viên mãn", "trọn vẹn", "mặn nồng", "nồng nàn", "đằm thắm",
            "bên nhau", "của nhau", "với nhau", "vòng tay", "trái tim", "niềm vui", "niềm tin",
            "dịu dàng", "bình yên", "yên bình", "tươi vui", "tràn đầy", "đong đầy", "mong chờ",
            "mong nhớ", "đính hôn", "đám cưới", "hoa hồng", "bầu trời", "ngôi sao", "lời chúc",
            "lãng mạn", "hết lòng", "dốc lòng", "một lòng", "trọn đời", "vĩnh cửu", "bận lòng",
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
            "quá khứ", "cho anh", "của anh", "với anh", "bên anh", "đừng bỏ", "càng thương",
            "quà 8/3", "dìu dắt", "tận tụy", "trở nên", "còn anh", "ngắm em", "mùa thu", "mạnh mẽ",
            "sài gòn", "con phố", "nhè nhẹ", "miễn là", "chỉ ước", "bắt đầu", "anh chỉ", "mỗi lần",
            "vô tình", "của mỗi", "dùng cả", "có phải", "gật đầu", "tin vào", "bao giờ", "trở lại",
            "yêu anh", "mệt mỏi", "cùng em", "anh vẫn", "đến thế", "con gái", "gửi em", "tri kỷ",
            "em yêu", "vợ yêu", "bé yêu", "bảo vệ", "gắn bó", "ôm lấy", "cái ôm", "nụ hôn",
            "êm đềm", "vui vẻ", "đầy ắp", "hẹn hò", "bó hoa", "vì sao", "mê đắm", "cả đời",
            "nhớ em", "ước mơ", "vạn sự", "tri ân", "cảm ơn", "mái ấm", "ông bà", "cha mẹ",
            "anh em", "chị em", "hồi ức", "cơn mơ", "bởi vì", "vì anh", "vì yêu", "cho em",
            "của em", "với em", "bên em", "còn em", "em đến", "bé nhỏ", "đến lạ", "hà nội",
            "mắt em", "lối đi", "đi tìm", "để làm", "sẽ tìm", "đẹp đẽ", "yêu em", "rực rỡ",
            "em vẫn", "vỗ về", "an ủi", "ấm áp", "ấm êm", "si mê", "như ý", "tổ ấm", "ba mẹ",
            "bố mẹ", "ký ức", "vì em", "ở bên", "ở lại", "có em", "là em", "phụng dưỡng",
            "nhiều người", "bình thường", "quãng đường", "sâu sắc", "đáy lòng", "điểm tựa",
            "thành công", "quyết định", "vẫn thường", "một khoảng", "năng lượng", "tuyệt vời",
            "chân tình", "chưa chắc", "lạ thường", "chạm phải", "một người", "ngoài kia", "con chúc",
            "giăng đầy", "tận hưởng", "theo cách", "nghỉ ngơi", "mình muốn", "mong muốn", "trở về",
            "khỏe mạnh", "hiện thực", "hiện diện", "nhẹ nhàng", "xứng đáng", "theo đuổi", "hơn nữa",
            "con đường", "tôn trọng", "nhộn nhịp", "tia nắng", "nhưng từ", "chẳng sợ", "cánh cửa",
            "lạnh lẽo", "đặc biệt", "bạn rằng", "cảm nhận", "bản thân", "nhìn lại", "hoàn hảo",
            "thật tốt", "tin rằng", "thật đẹp", "hài lòng", "nói rằng", "thư giãn", "mang đến",
            "cảm giác", "mục tiêu", "phong độ", "cảm hứng", "giữ trọn", "mang lại", "hi sinh", 
            "vắng vẻ", "chỉ cần", "của cậu", "lòng tớ", "lọt qua", "kết quả", "sau này", "cùng tớ",
            "tớ từng", "so sánh", "đi cùng", "nhận về", "sinh ra", "đối với", "của bạn", "lại một",
            "kịp nói", "món quà", "hơn hết", "yêu quý", "thật sự", "để mình", "có thêm", "tốt đẹp",
            "đôi khi", "cảm xúc", "nhận ra", "bạn cảm", "cố gắng", "bất ngờ", "dự định", "cho bạn",
            "suôn sẻ", "cho cận", "làm cho", "thu nhỏ", "nói thế", "nhớ cậu", "thế nào", "có cậu",
            "cậu có", "cậu là", "đi qua", "chỉ sợ", "là một", "để nói", "có thể", "tất cả","tới em",
            "đã qua", "bạn có", "mà bạn", "cơ hội", "đối xử", "sau đó", "nào đó", "đủ tốt", "và là",
            "phụ nữ", "tự tin", "vất vả", "đó nha", "nhân dịp", "tôn vinh", "thầy cô", "tới anh",
            "bên cạnh", "sưởi ấm", "cuối năm", "mọi người", "giáng sinh", "năm nay", "nhớ nhé",
            "thương nhé", "thương nè", "ổn không", "sao thế", "đâu rồi", "khi nào", "ở đâu",
            "đúng rồi", "vui lắm", "buồn ghê", "bình tĩnh", "không chỉ", "mà cả", "tới cậu",
            "đồng ý", "ghé thăm", "nhớ ra", "công chúa", "hoàng tử", "thương nha", "em bé",
            "chị gái", "em gái", "anh trai", "em trai", "chúc chị", "chúc cậu", "hoa, quà",
            "bỗng nhiên", "thanh xuân", "một giây", "như một", "nghe em", "nghe anh", "nghe cậu",
            "nghe bạn","nhớ bạn", "hình bóng", "chẳng phải", "tại sao", "không phải", "của người", 
            "lúc này", "gặp được", "bỗng chốc", "vô nghĩa", "chắc chắn", "được thương", "từng nghĩ",
            "lặng lẽ", "như thế", "thế nhưng", "hóa ra",

            // --- Nhóm 1 từ ---
            "chuyện", "nguyện", "thương", "trước", "chồng", "ngược", "khiến", "tương", "nghĩa",
            "chiều", "chuẩn", "giăng", "chúng", "những", "người", "không", "trong", "nhưng",
            "thích", "ngoan", "chính", "thành", "nhiều", "nhanh", "ngang", "ngoài", "tháng",
            "quản", "hoàn", "ngọt", "chạm", "chắc", "đúng", "rảnh", "xong", "chưa", "đang", "tiếp",
            "dừng", "muộn", "phải", "bỗng", "được", "cũng", "luôn", "nghĩ", "cười", "khóc", "buồn",
            "xinh", "mong", "thêm", "trên", "dưới", "chậm", "chọn", "chạy", "đứng", "ngồi", "hoặc",
            "khác", "bằng", "muốn", "thấy", "biết", "ngày", "mình", "nghe", "nhìn", "quay", "giúp",
            "dành", "chút", "thời", "gian", "việc", "chúc", "bình", "tặng", "nắng",

            // --- Nhóm chữ số, ký tự---
            "20/10", "20/11", "20-10", "20-11", "ngày 8/3 ", "ngày 8-3 ",
        ];

        const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        const MAX_PER_GROUP = ALPHABET.length * ALPHABET.length; 
        const WORD_TO_CODE = new Map();
        const CODE_TO_WORD = new Map();

        // Lưu trữ thông tin kiểm tra cho UI
        const DICTIONARY_ENTRIES = [];
        const SKIPPED_ENTRIES = [];
        let SHORT_VALID_COUNT = 0;
        let LOVE_VALID_COUNT = 0;
        let OTHER_VALID_COUNT = 0;

        (function buildDictionary() {
            const norm = w => w.normalize("NFC").toLowerCase().trim();
            const seen = new Set();

            function addGroup(list, prefix, label) {
                let index = 0;
                for (const raw of list) {
                    const word = norm(raw);
                    if (word.length < 4) {
                        SKIPPED_ENTRIES.push({ word: raw, group: label, reason: `Quá ngắn (${word.length} ký tự < 4)` });
                        continue;
                    }
                    if (seen.has(word)) {
                        SKIPPED_ENTRIES.push({ word: raw, group: label, reason: `Trùng lặp (đã đăng ký với mã ${WORD_TO_CODE.get(word)})` });
                        continue;
                    }

                    if (index >= MAX_PER_GROUP) {
                        SKIPPED_ENTRIES.push({ word: raw, group: label, reason: `Vượt giới hạn ${MAX_PER_GROUP} mã/nhóm` });
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

                    const wordCount = word.split(/\s+/).filter(Boolean).length;
                    DICTIONARY_ENTRIES.push({
                        stt: DICTIONARY_ENTRIES.length + 1,
                        groupIndex: index,
                        word,
                        code,
                        prefix,
                        group: label,
                        wordCount,
                        savedChars: word.length - code.length
                    });
                }
                return index;
            }

            SHORT_VALID_COUNT = addGroup(SHORT_WORDS, "_", "SHORT_WORDS"); // Tiền tố _
            LOVE_VALID_COUNT  = addGroup(LOVE_WORDS,  "*", "LOVE_WORDS");  // Tiền tố *
            OTHER_VALID_COUNT = addGroup(OTHER_WORDS, "#", "OTHER_WORDS"); // Tiền tố #
        })();

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

        const COMPRESS_REGEX = new RegExp(
            "(^|[^\\p{L}\\p{N}_])(" +
            [...WORD_TO_CODE.keys()]
                .sort((a, b) => b.length - a.length)
                .map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                .join("|") +
            ")(?!" + WORD_CLASS + ")",
            "giu"
        );

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
         * Nén văn bản (Escape *, _, #)
         */
        function compressWithDictionary(text) {
            if (!text) return "";
            return text
                .normalize("NFC")
                .replace(/[*_#]/g, c => c + c)
                .replace(COMPRESS_REGEX, (full, sep, match) => {
                    const encoded = encodeMatch(match);
                    return encoded === null ? full : sep + encoded;
                });
        }

        /**
         * Giải nén văn bản (Hỗ trợ _, *, #)
         */
        function decompressWithDictionary(text) {
            if (!text) return "";
            return text.replace(/\*\*|__|##|(_|\*|#)[a-zA-Z]{2}/g, (token) => {
                if (token === "**") return "*";
                if (token === "__") return "_";
                if (token === "##") return "#";

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
