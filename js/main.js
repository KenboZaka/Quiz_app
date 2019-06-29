var app = new Vue({
    el:"#app",
    data:{
        answer: "",
        message: "",
        questions: [
            {id: 1, content: "２０１９年、現在の日本の首相は？", correct_ans: "安倍晋三", get_score: 10},
            {id: 2, content: "「デビュー」という言葉は何語?", correct_ans: "フランス語", get_score: 20},
            {id: 3, content: "俗にクレオパトラ、楊貴妃と並んで世界三大美女の1人とされる歌人は誰?", correct_ans: "小野小町", get_score: 30},
            {id: 4, content: "「カプチーノ」は、エスプレッソコーヒーに何を加えたもの?", correct_ans: "ミルク", get_score: 40},
            {id: 5, content: "11世紀末からヨーロッパを中心に遠征を行った十字軍を組織したのは何教の教徒?", correct_ans: "キリスト教", get_score: 20},
            {id: 6, content: "妊婦向け雑誌たまごクラブが2004年６月の特集から使い始めた出来ちゃった結婚の代わりとなる言葉といえば何？", correct_ans: "授かり婚", get_score: 40},
            {id: 7, content: "江戸幕府の第3代将軍は誰?", correct_ans: "徳川家光", get_score: 10},
            {id: 8, content: "1859年、吉田松陰らが処罰された出来事は?", correct_ans: "安政の大獄", get_score: 50},
            {id: 9, content: "もともと文房具や雑貨を販売する店として創設されたブランドはどれ?", correct_ans: "ティファニー", get_score: 40},
            {id: 10, content: "1950年代後半、三種の神器とも呼ばれた生活必需品といえば、白黒テレビ、洗濯機、もう一つは？", correct_ans: "冷蔵庫", get_score: 30},
            {id: 11, content: "1954〜1973年まで日本の経済規模が飛躍的に拡大したことを何というか？", correct_ans: "高度経済成長", get_score: 40},
            {id: 12, content: "1972年に日本列島改造論を発表した首相は？高速道路、新幹線等を整備することで地方の工業化が加速した。", correct_ans: "田中角栄", get_score: 20},
            {id: 13, content: "日本に最初に来たヨーロッパ人はどこの国の人？", correct_ans: "ポルトガル", get_score: 50},
            {id: 14, content: "太平洋戦争後，日本が独立を回復した条約を結んだアメリカの都市はどこ？", correct_ans: "サンフランシスコ", get_score: 20},
            {id: 15, content: "平安時代に「枕草子」を書いた人物は？", correct_ans: "清少納言", get_score: 30},
            {id: 16, content: "東急系列であることと、営業時間(10時から9時)にちなんで作られた、渋谷の有名商業ビルは？", correct_ans: "渋谷109", get_score: 10},
            {id: 17, content: "パナソニック(旧松下電器産業)の創業者で元社長といえば？", correct_ans: "松下幸之助", get_score: 20},
            {id: 18, content: "トヨタ自動車社長6代目社長(2009～)は？", correct_ans: "豊田章男", get_score: 60},
            {id: 19, content: "ソフトバンクグループの創始者は？", correct_ans: "孫正義", get_score: 40},
            {id: 20, content: "「鉄腕アトム」「ジャングル大帝」などで有名な漫画の神様といえば？", correct_ans: "手塚治虫", get_score: 30},
            {id: 21, content: "明治の初め「学問のすすめ」を著した人物は？", correct_ans: "福沢諭吉", get_score: 30},
            {id: 22, content: "ドラクエ5のサブタイトルといえば？", correct_ans: "天空の花嫁", get_score: 70},
            {id: 23, content: "マリオの双子の弟の名前は？", correct_ans: "ルイージ", get_score: 10},
            {id: 24, content: "マリオシリーズのヒロインでキノコ王国の姫といえば？", correct_ans: "ピーチ姫", get_score: 20},
            {id: 25, content: "ストリートファイターシリーズのキャラクター、ブランカの出身国といえば？", correct_ans: "ブラジル", get_score: 80},
        ],
        number: 0,
        score: 0,
        is_answered: false
    },
    methods:{
        checkAns:function(){
            if (this.answer === "") return;
            this.is_answered = true;
            const current_question = this.questions[this.number];
            if (this.answer === current_question.correct_ans) {
                this.message = "正解！";
                this.score = this.score + current_question.get_score;
            } else {
                this.message = `残念！答えは、${current_question.correct_ans}です`
            }
        },
        nextQestion:function(){
            this.is_answered = false;
            this.answer = "";
            const max = this.questions.length;
            this.number = Math.floor(Math.random() * max);
        },
    }
})

