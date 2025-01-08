import RenderList from "../components/RenderList";
import Layout from "../components/Layout";
import { Link } from "react-router";

const HomeScreen = () => {
  const items = [
    { id: 1, title: "Introduction to JavaScript" },
    { id: 2, title: "Understanding Arrays" },
    { id: 3, title: "Object Manipulation" },
    { id: 4, title: "Working with Functions" },
    { id: 5, title: "DOM Manipulation Basics" },
    { id: 6, title: "Event Handling in JavaScript" },
    { id: 7, title: "Asynchronous Programming" },
    { id: 8, title: "Introduction to APIs" },
    { id: 9, title: "Error Handling" },
    { id: 10, title: "JavaScript Best Practices" },
  ];

  return (
    <Layout>
      <h1 className="text-[28px] font-bold mb-6">Onboarding Modules</h1>
      <div className="animate__animated animate__backInUp">
        <RenderList
          items={items}
          listClassName="border border-gray-200 rounded-[8px] "
          itemClassName="px-8 py-4 border-b-[1px] border-gray-200"
          renderItem={(item, index) => (
            <Link to={`/module/${index}`}>
              <p>
                {index + 1}. {item.title}
              </p>
            </Link>
          )}
        />
      </div>
    </Layout>
  );
};

export default HomeScreen;
