import { BlogCategoryMenuProps } from "../blogInterface";
import { BlogCategoryList } from "../utils";

const BlogMenu = () => {
    const listItems = BlogCategoryList.map((items: BlogCategoryMenuProps) =>
        <li className={items.isActive ? "active" : ""} key={items.id}>{items.categoryName}</li>
    );

    return (
        <>
            <div className="container_width flex flex-row items-center pt-16 px-5">
                <ul className="blogMenuContainer">
                    {listItems}
                </ul>
            </div>
        </>
    );
};

export default BlogMenu;