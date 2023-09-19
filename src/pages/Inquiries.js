export default function Inquiries(){
    return (
    <>
    <body>
    <h1>Inquiries <i class="fas fa-question fa-pulse"></i></h1>
    <div class="container">
      <div class="left">
        <form id="form">
          <label for="post"> Ask a question here </label>
          <br /><br />
          <textarea name="post" id="input" cols="40" rows="15"></textarea>
          <br /><br />
          <div id="msg"></div>
          <PostButton />
        </form>
      </div>
      <div class="right">
        <h3>Your questions</h3>
        <div id="posts">
          <div>
            <span class="options"> </span>
          </div>

          <div>
            <span class="options"> </span>
          </div>
        </div>
      </div>
    </div>
  </body>
    </>
    )
}

function PostButton(){
  return (
    <button type="submit">Post</button>
  )
}