"use client";
import { useState } from "react";
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
  title: "",
  description: "",
};

function BlogOverviewPage() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogformdata, setBlogFormData] = useState(initialBlogFormData);
  async function handlesaveblogdata() {
    try {
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogformdata),
      });
      const result = await apiResponse.json();
      console.log(result);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-gradient-to-r  from-purple-500 to-blue-600">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogformdata={blogformdata}
        setBlogFormData={setBlogFormData}
        handlesaveblogdata={handlesaveblogdata}
      />
      <div>Blog List Section</div>
    </div>
  );
}

export default BlogOverviewPage;
