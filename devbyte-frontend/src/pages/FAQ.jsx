import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import HeaderWrapper from "@/components/ui/Header";

const FAQ = () => {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null); // State holds the ID of the currently open item.

  const faqData = [
    {
      id: 1,
      question: "What is DevByte?",
      answer:
        "DevByte is a global community for open-source collaboration, learning, and networking.",
    },
    {
      id: 2,
      question: "How can I become a member?",
      answer:
        "Simply register through our Member Directory page and join our Discord server.",
    },
    {
      id: 3,
      question: "Is it free to join?",
      answer:
        "Simply register through our Member Directory page and join our Discord server.",
    },
    {
      id: 4,
      question: "How can I contribute?",
      answer:
        "Simply register through our Member Directory page and join our Discord server.",
    },
    {
      id: 5,
      question: "Do you host events?",
      answer:
        "Simply register through our Member Directory page and join our Discord server.",
    },
  ];

  const toggleAnswer = (id) => {
    // If the clicked item is already open, close it (set to null).
    // Otherwise, set the openId to the ID of the clicked item.
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0D1117] text-[#161B22] dark:text-[#D9D9D9]">
      {/* Top container with message */}
      <HeaderWrapper className="text-center ">
        <section>
          <h1
            className={`text-depth-shadow text-3xl sm:text-5xl font-extrabold mb-2`}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-lg">
            Quick answers to common questions about DevByte.
          </p>
       </section>
      </HeaderWrapper>

      {/* FAQ SECTION */}
      <section className={`w-full`}>
        <div className=" w-full pt-[3.1rem] flex flex-col justify-center items-center gap-4">
          {faqData.map((item) => {
            const isOpen = item.id === openId;

            return (
              <div
                key={item.id}
                className="w-[85%] sm:w-[75%] dark:bg-[#2A2F36] border border-[#2A2F36]  px-8 py-6 rounded-xl"
              >
                {/* QUESTION */}
                <div
                  className={` text-lg flex justify-between cursor-pointer`}
                  onClick={() => toggleAnswer(item.id)}
                >
                  <h3 className={` font-semibold`}>{item.question}</h3>
                  {isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}
                </div>

                {/* ANSWER */}
                <p
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? `max-h-96 opacity-100 mt-4`
                      : `max-h-0 opacity-0 mt-0`
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>

        <HeaderWrapper className="p-6 mt-10 text-center ">
            <div>
            <h3 className={` text-xl font-semibold mb-2`}>
              Still have questions?
            </h3>
            <p className={` mb-5`}>
              Reach out to us through the Contact Page or join our community chat.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r bg-[#3f8bee]   px-8 py-2 rounded-sm text-white"
            >
              Go to Contact Page
            </button>
            </div>
        </HeaderWrapper>
        
      </section>
    </div>
  );
};

export default FAQ;
