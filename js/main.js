var app = new Vue({
    el:"#app",
    data:{
        answer: "",
        message: "",
        questions: [
            {id: 1, content: "日本の首相は？", correct_ans: "安倍晋三", get_score: 10},
            {id: 2, content: "日本の前回首相は？", correct_ans: "田中角栄", get_score: 20},
            {id: 3, content: "日本の前々回首相は？", correct_ans: "村山富市", get_score: 30},
            {id: 4, content: "アメリカの大統領は？", correct_ans: "トランプ", get_score: 40}
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
                this.message = `不正解！答えは${current_question.correct_ans}です`
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

