import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../api/newsApi";

const PostDetails = () => {
  const { id } = useParams();

  const { data, isLoading } =
    useGetPostByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={`https://picsum.photos/800/400?random=${id}`}
        className="rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {data.title}
      </h1>

      <p>{data.body}</p>
    </div>
  );
};

export default PostDetails;