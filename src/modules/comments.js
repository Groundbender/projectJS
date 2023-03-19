const comments = () => {
  const commentsBlock = document.querySelector(" .comments-container");

  console.log(commentsBlock);

  let firstSlide = 0;
  let lastSLide = 3;
  let displayedBlocks = 3;

  let idInterval;

  const getData = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log(error.message));
  };
  const render = (comments = []) => {
    const commentColors = ["review-green", "review-gray", "review-orange"];
    let commentItems = [];
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

      if (index < displayedBlocks) {
        commentsBlock.append(itemComment);
        const arrow = itemComment.querySelector(".review-arrow");

        arrow.classList.add("rotated");
      }

      commentItems.push(itemComment);
    });

    startCommentSwitch(commentItems);
  };

  const hideComment = (blocks, index) => {
    blocks[index].remove();
  };

  const openComment = (blocks, index) => {
    commentsBlock.append(blocks[index]);
  };

  const switchComments = (blocks) => {
    hideComment(blocks, firstSlide);
    firstSlide++;
    if (firstSlide >= blocks.length) {
      firstSlide = 0;
    }

    openComment(blocks, lastSLide);
    lastSLide++;
    if (lastSLide >= blocks.length) {
      lastSLide = 0;
    }
  };

  const startCommentSwitch = (blocks) => {
    idInterval = setInterval(() => {
      switchComments(blocks);
    }, 20000);
  };

  commentsBlock.innerHTML = `	<div class="loadingio-spinner-spinner-pekitlceoak"><div class="ldio-4n6hftn9ffd">
  <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div></div>`;

  getData("/cj/comments.json")
    .then((data) => {
      setTimeout(() => {
        try {
          commentsBlock.innerHTML = "";
          render(data.comments);
        } catch (error) {
          console.log(error.message);
          commentsBlock.innerHTML = `	<div class="loadingio-spinner-spinner-pekitlceoak"><div class="ldio-4n6hftn9ffd">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>`;
        }
      }, 2000);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default comments;
