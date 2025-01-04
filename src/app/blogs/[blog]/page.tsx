'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export interface SubSection {
  subHeading: string;
  text: string;
}

export interface Section {
  heading: string;
  content: SubSection[];
  contents?: string; // Optional in case content is not an array
}

export interface BlogData {
  title: string;
  content: string;
  sections: Section[];
}

const ProductPage = () => {
  const searchParams = useSearchParams();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  
  // Get the 'id' from searchParams
  const id = searchParams?.get("id");

  // Fetch blog data based on the ID
  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const res = await fetch(`https://ecomer-wesite-3.vercel.app/api/blogs?id=${id}`);
        const data: BlogData = await res.json();
        setBlogData(data);
      };

      fetchBlog();
    }
  }, [id]);

  // If no data or no ID, return null or a loading state
  if (!blogData) return <div>Loading...</div>;

  const { title, content, sections } = blogData;

  return (
    <div className="blog-container max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-10">
      <h1 className="blog-title text-4xl font-bold text-gray-900 mb-6 tracking-tight">{title}</h1>
      <p className="blog-intro text-lg text-gray-700 mb-8 leading-relaxed">{content}</p>

      {/* Render each section */}
      {sections.map((section, index) => (
        <div key={index} className="blog-section mb-12">
          <h2 className="section-heading text-3xl font-semibold text-gray-800 mb-5">{section.heading}</h2>

          {section.content.length > 0 ? (
            section.content.map((subSection, subIndex) => (
              <div key={subIndex} className="section-subheading mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{subSection.subHeading}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{subSection.text}</p>
              </div>
            ))
          ) : (
            <p className="text-base text-gray-600">{section.contents}</p>
          )}
        </div>
      ))}

      {/* Footer or Call to Action (optional) */}
    </div>
  );
};

export default ProductPage;
