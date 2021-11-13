import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


function Counter() {
  // const [state, setState] = useState(InitialValue)
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  return (
    <div>
      <IconButton
        className="likes-dislikes"
        onClick={() => { setLike(like + 1) }}
        aria-label="delete"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>





      <IconButton
        className="likes-dislikes"
        onClick={() => { setDislike(dislike + 1) }}
        aria-label="delete"
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

    </div>
  )
}

export { Counter }