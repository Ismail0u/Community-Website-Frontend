import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const BlogsCard = ({ data }) => {
  return (
    <div className="my-2 mx-2 w-[20rem] lg:w-[24rem]   rounded-xl md:w-[22rem] border border-border overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 ">
        <div className="mb-3">
          <span className="inline-block   text-sm font-medium text-primary  rounded-full text-sky-400">
            {data.category}
            {/* Lorem, ipsum. */}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
          {data.title}
          {/* Lorem ipsum dolor sit amet. */}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {data.description}
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          excepturi. */}
        </p>

        <Link
         to={`/blog-details/${data.id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-2 transition-all duration-200 group/link text-sky-400"
        >
          Read more
          <ArrowRight className="w-4 h-4  group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
