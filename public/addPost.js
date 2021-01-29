

export class Post
{
    constructor(authorID, authorName, authorPass)
    {
        this.authorID = authorID;
        this.authorName = authorName;
        this.authorPass = authorPass;
        this.postsLock = [];
        this.likesLock = [];
    }
    
    

    creatorPostElements(authorId,authorName,authorPass)
    {
        
        let author_id = authorId;
        let author_name = authorName;
        let author_pass = authorPass;
        let likesId = (this.postsLock.length+1)+"#"+author_id+"#";
        let postId = (this.postsLock.length+1)+"#"+author_id;
        console.log(likesId);
        let like = document.querySelector(".like-it");
        let textContent = document.querySelector(".inputText").value;

        const myList = document.getElementById('table-ct');
        const listChildren = myList.children;
        const copyItems = listChildren[1];
        const copy = copyItems.cloneNode(true);
        copy.id = "2";
        
        copy.id = (this.postsLock.length+1)+"#"+author_id;
        let postLogoChild = ((((copy.children[0]).children[1]).children[0]).children[0]);
        let likeChild = copy.children[0];
        let likeChild2 = likeChild.children[0];
        let likeChildValue = likeChild2.children[0];
        let likeChildValue2 = likeChild2.children[1];
        let commentChild = likeChild.children[1];
        console.log(postLogoChild);
        commentChild.id = (this.postsLock.length+1)+"#"+author_id;
        postLogoChild.id = (this.postsLock.length+1)+"#"+author_id;
        likeChild2.id = (this.postsLock.length+1)+"#"+author_id+"#";
        likeChildValue.id = (this.postsLock.length+1)+"#"+author_id+"#";
        likeChildValue2.id = (this.postsLock.length+1)+"#"+author_id+"#";
        let child1 = copy.children[1];
        let child2 = child1.children[0]; 
        let text = child2.children[0];
        text.textContent = textContent;
       
        if(textContent.length!="")
        {
            myList.appendChild(copy);
            this.updatePostsLock(author_id, author_name, postId, likesId, textContent);
            this.updateLikesLock(author_id, author_name, likesId);

        }
           
        
     
    }
    

    updatePostsLock(authorId, authorName, postId, likesId, postText)
    {
      const post = {
          id: authorId,
          author: authorName,
          post: postId,
          likes: likesId,
          text: postText,
          
      }
      this.postsLock.push(post);
    }
    
    
    updateLikesLock(authorId,authorName,likesId)
    {
        const like = {
            author_Id: authorId,
            author_Name: authorName,
            like_Id: likesId,
            
        }
        this.likesLock.push(like);
    }


    deletePost(value, postTable)
    {
      for(var i=0; i<postTable.length; i++)
      {
        if(postTable[i].post.includes(value))
        {
        document.getElementById(value).remove();
         }

      }
    }

     





   




}


    






