document.addEventListener("DOMContentLoaded", () => {
    // 這裡宣告所有變數
    const stars = document.querySelectorAll(".stars span");
    const commentBox = document.getElementById("commentBox");
    const commentList = document.getElementById("commentList");
    const movieId = document.body.getAttribute("data-movie-id");

    function updateStars(rating) {
        stars.forEach(s => {
            s.classList.toggle("active", s.getAttribute("data-star") <= rating);
        });
    }

    // 星星評分互動
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = star.getAttribute("data-star");
            localStorage.setItem(movieId + "_rating", rating);
            updateStars(rating);
        });
    });

    // 送出留言
    document.getElementById("submitBtn").addEventListener("click", () => {
        const text = commentBox.value.trim();
        const rating = localStorage.getItem(movieId + "_rating") || 0;
        if (text) {
            const commentObj = { text, rating };
            appendComment(commentObj);
            const all = JSON.parse(localStorage.getItem(movieId + "_comments") || "[]");
            all.push(commentObj);
            localStorage.setItem(movieId + "_comments", JSON.stringify(all));
            commentBox.value = "";
            localStorage.removeItem(movieId + "_rating");
            updateStars(0);
        }
    });

    // 顯示留言（含星星）
    function appendComment(commentObj) {
        const p = document.createElement("div");
        p.className = "comment";
        let starsHtml = '<span class="comment-stars">';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span style="color:${i <= commentObj.rating ? '#FFD700' : '#ccc'};">&#9733;</span>`;
        }
        starsHtml += '</span>';
        p.innerHTML = `${starsHtml} <span class="comment-text">${commentObj.text}</span>`;
        commentList.appendChild(p);
    }

    // 載入所有留言
    const storedComments = JSON.parse(localStorage.getItem(movieId + "_comments") || "[]");
    storedComments.forEach(obj => {
        appendComment(obj);
    });
});
