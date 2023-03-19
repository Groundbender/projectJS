const comments = () => {
  const commentsBlock = document.querySelector(" .comments-container");
  const commentsItem = commentsBlock.querySelectorAll(".comment-item");
  console.log(commentsBlock);
  console.log(commentsItem);

  const getData = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log(error.message));
  };
  const render = (comments = []) => {
    const commentColors = ["review-green", "review-gray", "review-orange"];

    comments.forEach((comment, index) => {
      const itemComment = document.createElement("div");
      itemComment.className = "review-margin-bottom row comment-item";

      if (comment.id % 2 === 0) {
        itemComment.innerHTML = `
        <div class="col-xs-9 col-sm-9">
// 							<div class="review-inner ${
          commentColors[comment.id % commentColors.length]
        } review-arrow review-arrow-right">
// 								<p class="text-normal">${comment.author}</p>
// 								<p>${comment.comment}</p>
// 							</div>
// 						</div>
// 						<div class="col-xs-3 col-sm-2">
// 							<div class="review-user">
// 								<img src="images/users/${
          comment.image || "anon-user.png"
        }" alt="user avatar" class="img-responsive avatar">
// 							</div>
// 						</div>		`;
      } else {
        itemComment.innerHTML = `				
        // 						<div class="col-xs-3 col-sm-2">
        // 							<div class="review-user">
        // 								<img src="images/users/${
          comment.image || "anon-user.png"
        }" alt="user avatar" class="img-responsive avatar">
        // 							</div>
        // 						</div>
        // 						<div class="col-xs-9 col-sm-9">
        // 							<div class="review-inner ${
          commentColors[comment.id % commentColors.length]
        } review-arrow review-arrow-left">
        // 								<p class="text-normal">${comment.author}</p>
        // 								<p>${comment.comment}</p>
        // 							</div>
        // 						</div>					
        // 				`;
      }
    });
  };

  getData("/cj/comments.json").then((data) => console.log(data));
};

export default comments;
