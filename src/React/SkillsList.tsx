import React, { useState } from "react";

const CategoryIcons = {
  "网页开发": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "移动端开发": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "后端开发": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM9 8H11V16H9V8ZM13 8H15V14H13V8Z" />
    </svg>
  ),
  "产品设计": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.4142L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.5858L20.2929 6.29289Z" />
    </svg>
  ),
  "开发工具": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5.33341 3.25H18.6667C19.4031 3.25 20 3.84687 20 4.58333V7.25H4V4.58333C4 3.84687 4.59687 3.25 5.33341 3.25ZM4 9.25V19.4167C4 20.1531 4.59687 20.75 5.33341 20.75H18.6667C19.4031 20.75 20 20.1531 20 19.4167V9.25H4ZM10 11.25H14C14.5523 11.25 15 11.6977 15 12.25C15 12.8023 14.5523 13.25 14 13.25H10C9.44772 13.25 9 12.8023 9 12.25C9 11.6977 9.44772 11.25 10 11.25Z" />
    </svg>
  ),
  

};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "网页开发": [
      "使用 React、Vue 等主流框架开发单页面应用",
      "掌握 HTML5、CSS3、JavaScript/TypeScript 基础",
      "了解前端工程化和模块化开发",
      "能够使用 TailwindCSS、Element UI 等组件库",
      "熟悉 Git 版本控制和团队协作流程",
    ],
    "后端开发": [
      "Java Spring Boot 应用开发与部署",
      "RESTful API 设计与实现",
      "MySQL 数据库基础设计与使用",
      "了解基本的微服务架构概念",
      "掌握基础的数据结构与算法",
    ],
    "开发工具": [
      "熟练使用 VSCode、IDEA 等开发工具",
      "了解 Docker 容器化技术基础",
      "掌握 npm/yarn 包管理工具",
      "了解 Linux 基本命令和操作",
    ], 
    "产品设计": [
      "了解用户需求分析和用户体验设计",
      "使用 Figma 进行基础界面设计",
      "注重用户体验和交互细节",
      "了解基本的设计原则和方法",
    ],

  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        我能做什么？
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
