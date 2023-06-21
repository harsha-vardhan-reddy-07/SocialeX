import React, { useContext } from 'react'
import '../styles/CreatePosts.css'
import {RxCross2} from 'react-icons/rx' 
import { GeneralContext } from '../context/GeneralContextProvider'

const CreatePost = () => {

    const {isCreatPostOpen, setIsCreatePostOpen} = useContext(GeneralContext);

  return (
    <>
        <div className="createPostModalBg" style={isCreatPostOpen? {display: 'contents'} : {display: 'none'}} >
            <div className="createPostContainer">
               
                <RxCross2 className='closeCreatePost' onClick={()=> setIsCreatePostOpen(false)} />
                <h2 className="createPostTitle">Create post</h2>
                <hr className="createPostHr" />
                
                <div className="createPostBody">
                    <form>
                        <div className="uploadImgBox">
                            <input type="file" id='uploadImg' />
                            <label htmlFor="uploadImg">upload image</label>
                        </div>
                        <div className="form-floating mb-3 authFormInputs descriptionInput">
                            <input type="text" className="form-control descriptionInput" id="floatingDescription" placeholder="Description" /> 
                            <label htmlFor="floatingDescription">Description</label>
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePost