import { createSlice } from "@reduxjs/toolkit";

export interface CommentsState {
  comments: Comment[];
}

export interface Comment {
  id: string;
  title: string;
}

const initialState: CommentsState = {
  comments: [],
};

const CommentsSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    addComment(state, action) {
      const newComment = action.payload;
      state.comments.push(newComment);
    },
  },
});

export const { addComment } = CommentsSlice.actions;
export default CommentsSlice.reducer;
