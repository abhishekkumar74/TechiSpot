import React, { useState } from 'react'
import styles from './Post.module.css'
export default function Post() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };
  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };

  const handleLikeToggle = () => {
    setIsLiked((prevState) => !prevState);
    handleClick(); // Increment the counter when liked
  };

  const handleCommentToggle = () => {
    setIsCommented((prevState) => !prevState);
  };

  const handleShareToggle = () => {
    setIsShared((prevState) => !prevState);
  };
  return (
    <div className={styles.post}>
      <div className={styles.newPost}>
        <img src="https://i.pinimg.com/564x/ac/18/49/ac18498ee93158817a026a82e8655fa7.jpg" alt="user" className={styles.userDP} />
        <label htmlFor="userpost">
          <input type="text" id='userpost' placeholder="What's going on!" className={styles.Input} />
        </label>

      </div>
      <hr />

      <div className={styles.emojis}>
        <i class="fa-regular fa-image" ></i>
        <i class="fa-regular fa-face-smile"></i>
        <i class="fa-regular fa-calendar-days"></i>
        <button className={styles.Postbtn}>Post</button>
      </div>
      <hr />

      <div className={styles.userpost}>

        <div className={styles.profileContainer}>
          <div className={styles.usrprofile}>
            <img src="https://i.pinimg.com/474x/bd/26/b7/bd26b704fca0c5e3fe68f10322bf65c0.jpg" alt="Profile" className={styles.profilePic} />
            TechiSpot <button className={`${styles.followButton} ${isFollowing ? styles.whenclick1 : ''}`} onClick={handleFollowToggle}> {isFollowing ? 'Following' : 'Follow +'}
            </button>
            <p className={styles.bio}>Hello, This is a post. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam omnis sunt explicabo temporibus provident. Recusandae, dolorem nisi. Sunt necessitatibus qui dolore, consequatur doloribus nam? Perferendis commodi sunt minima aliquam?</p>

          </div>
        </div>
        <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news " className={styles.pstimg} />
        <div className={styles.reactions}>
          <button
            className={`${styles.iconButton} ${isLiked ? styles.whenclick : null}`}
            onClick={handleLikeToggle}
          >
            <div className={styles.count}>{counter}</div>
            <i className="fa-regular fa-heart" id={styles.heart}></i>
          </button>
          <button
            className={`${styles.iconButton} ${isCommented ? styles.whenclick : null}`}
            onClick={handleCommentToggle}
          >
            <i className="fa-regular fa-comments"></i>
          </button>
          <button
            className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}
            onClick={handleShareToggle}
          >
            <i className="fa-regular fa-share-square"></i>
          </button>
          <button  className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}> <i class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>

      <div className={styles.userpost}>
        <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news " className={styles.pstimg} />
        <div className={styles.reactions}>
          <button
            className={`${styles.iconButton} ${isLiked ? styles.whenclick : null}`}
            onClick={handleLikeToggle}
          >
            <div className={styles.count}>{counter}</div>
            <i className="fa-regular fa-heart" id={styles.heart}></i>
          </button>
          <button
            className={`${styles.iconButton} ${isCommented ? styles.whenclick : null}`}
            onClick={handleCommentToggle}
          >
            <i className="fa-regular fa-comments"></i>
          </button>
          <button
            className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}
            onClick={handleShareToggle}
          >
            <i className="fa-regular fa-share-square"></i>
          </button>
          <button  className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}> <i class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>
      <div className={styles.userpost}>
        <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news " className={styles.pstimg} />
        <div className={styles.reactions}>
          <button
            className={`${styles.iconButton} ${isLiked ? styles.whenclick : null}`}
            onClick={handleLikeToggle}
          >
            <div className={styles.count}>{counter}</div>
            <i className="fa-regular fa-heart" id={styles.heart}></i>
          </button>
          <button
            className={`${styles.iconButton} ${isCommented ? styles.whenclick : null}`}
            onClick={handleCommentToggle}
          >
            <i className="fa-regular fa-comments"></i>
          </button>
          <button
            className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}
            onClick={handleShareToggle}
          >
            <i className="fa-regular fa-share-square"></i>
          </button>
          <button  className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}> <i class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>
      <div className={styles.userpost}>
        <img src="https://media.licdn.com/dms/image/D4D12AQG56UPUtPJj0w/article-cover_image-shrink_600_2000/0/1669373321238?e=2147483647&v=beta&t=uUMorY6yjVASSX_Iy-VNu8eXkAMfkmY97PWk7zDKR0w" alt="news" className={styles.pstimg} />
        <div className={styles.reactions}>
          <button
            className={`${styles.iconButton} ${isLiked ? styles.whenclick : null}`}
            onClick={handleLikeToggle}
          >
            <div className={styles.count}>{counter}</div>
            <i className="fa-regular fa-heart" id={styles.heart}></i>
          </button>
          <button
            className={`${styles.iconButton} ${isCommented ? styles.whenclick : null}`}
            onClick={handleCommentToggle}
          >
            <i className="fa-regular fa-comments"></i>
          </button>
          <button
            className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}
            onClick={handleShareToggle}
          >
            <i className="fa-regular fa-share-square"></i>
          </button>
          <button  className={`${styles.iconButton} ${isShared ? styles.whenclick : null}`}> <i class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>
    </div>
  )
}

