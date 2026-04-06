"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
    loading,
    setLoading,
    blogformdata,
    setBlogFormData,
    handlesaveblogdata
}: {
  openBlogDialog: boolean;
  setOpenBlogDialog: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  blogformdata: {
    title: string;
    description: string;
  };
  setBlogFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
    }>
  >;
    handlesaveblogdata: () => Promise<void>;
}) {
  return (
    <>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogformdata.title}
                id="title"
                className="col-span-3"
                onChange={(e) => setBlogFormData((prev) => ({ ...prev, title: e.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                placeholder="Enter blog description"
                value={blogformdata.description}
                id="description"
                className="col-span-3"
                onChange={(e) => setBlogFormData((prev) => ({ ...prev, description: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handlesaveblogdata} type="button">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddNewBlog;
