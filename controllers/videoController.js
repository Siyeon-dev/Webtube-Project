export const home = (req, res) => res.render("home", { pageTitle : "Home"});

export const search = (req, res) => {
    const {query: { term: searchingBy }} = req;
    res.render("search", { pageTitle: "Search", searchingBy}); 
};

export const videos = (req, res) => res.render("videos", { pageTitle : "Videos"});
export const upload = (req, res) => res.render("upload", { pageTitle : "Upload"});
export const video_detial = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail"});
export const edit_video = (req, res) => res.render("editVideo", { pageTitle : "Edit Video"});
export const delete_video = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video"});