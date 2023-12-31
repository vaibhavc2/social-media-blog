// import { useCallback, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { Button, Input, RTE, Select } from "..";
// import { databaseService, storageService } from "../../appwrite/config";
// import { useAppSelector } from "../../store";
// import { Post } from "../../types";

// const PostForm = ({ post }: { post?: Post }) => {
//   const { register, handleSubmit, watch, setValue, control, getValues } =
//     useForm({
//       defaultValues: {
//         title: post?.title || "",
//         slug: post?.slug || "",
//         content: post?.content || "",
//         status: post?.status || "active",
//         featuredImage: post?.featuredImage || ""
//       }
//     });
//   const navigate = useNavigate();
//   const userData = useAppSelector((state) => state.authReducer.userData);

//   const submit = async (data) => {
//     if (post) {
//       const file = data.image[0]
//         ? storageService.uploadFile(data.image[0])
//         : null;

//       if (file) {
//         storageService.deleteFile(post?.featuredImage);
//       }

//       const dbPost = await databaseService.updatePost(post.slug, {
//         ...data,
//         featuredImage: file ? file.$id : undefined
//       });

//       if (dbPost) {
//         navigate(`post/${dbPost.$id}`);
//       }
//     } else {
//       const file = data.image[0]
//         ? storageService.uploadFile(data.image[0])
//         : null;
//       if (file) {
//         const fileId = file.$id;
//         data.featuredImage = fileId;
//         const dbPost = await databaseService.createPost({
//           ...data,
//           userId: userData.$id
//         });
//         if (dbPost) {
//           navigate(`/post/${dbPost.$id}`);
//         }
//       }
//     }
//   };

//   const slugTransform = useCallback(
//     (value: string) => {
//       if (value) {
//         // const slug = value.toLowerCase().replace(/ /g, "-");
//         // setValue("slug", slug);
//         // return slug;
//         return value
//           .trim()
//           .toLowerCase()
//           .replace(/^[a-zA-Z\d\s]+/g, "-")
//           .replace(/\s/g, "-");
//       }

//       return "";
//     },
//     [setValue]
//   );

//   useEffect(() => {
//     const subscription = watch((value, { name }) => {
//       if (name === "title") {
//         setValue("slug", slugTransform(value.title, { shouldValidate: true }));
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [watch, slugTransform, setValue]);
//   return (
//     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//       <div className="w-2/3 px-2">
//         <Input
//           label="Title :"
//           placeholder="Title"
//           className="mb-4"
//           {...register("title", { required: true })}
//         />
//         <Input
//           label="Slug :"
//           placeholder="Slug"
//           className="mb-4"
//           {...register("slug", { required: true })}
//           onInput={(e) => {
//             setValue("slug", slugTransform(e.currentTarget.value), {
//               shouldValidate: true
//             });
//           }}
//         />
//         <RTE
//           label="Content :"
//           name="content"
//           control={control}
//           defaultValue={getValues("content")}
//         />
//       </div>
//       <div className="w-1/3 px-2">
//         <Input
//           label="Featured Image :"
//           type="file"
//           className="mb-4"
//           accept="image/png, image/jpg, image/jpeg, image/gif"
//           {...register("image", { required: !post })}
//         />
//         {post && (
//           <div className="mb-4 w-full">
//             <img
//               src={String(storageService.getFilePreview(post.featuredImage))}
//               alt={post.title}
//               className="rounded-lg"
//             />
//           </div>
//         )}
//         <Select
//           options={["active", "inactive"]}
//           label="Status"
//           className="mb-4"
//           {...register("status", { required: true })}
//         />
//         <Button
//           type="submit"
//           className={`w-full ${post ? "bg-green-500" : undefined}`}
//         >
//           {post ? "Update" : "Submit"}
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default PostForm;
