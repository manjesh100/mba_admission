import React from 'react';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';

const PostJob: React.FC = () => {
  return (
    <>
      <Breadcrumb />
        <section className="full_width light_red_gray">
            <div className="container_width py-20 px-5">
                <div className="fin_a_job_wrapper">
                    <div className="section_heading pb-4 text-left">Find your trusted talent</div>
                    <div className="find_a_job_heading_para">Submit your request and get responses from the finest talents, shortlisted specifically for you, trusted and reviewed by other students.</div>
                    <div className="form_heading mt-7 text-left">About you</div>
                    <form>
                        <div className="colum_grid_2">
                            <input type="text" name="firstName" placeholder="Your First Name" className="txt_box_style" />
                            <input type="text" name="lastName" placeholder="Your Last Name" className="txt_box_style" />
                        </div>
                        <div className="colum_grid_2">
                            <input type="email" name="email" placeholder="Your email" className="txt_box_style" />
                            <input type="tel" name="phone" placeholder="Enter you phone" className="txt_box_style" />
                            <select name='countryCode'>
                                <option value={"UK"}>UK</option>
                                <option value={"IND"}>UK</option>
                                <option value={"USA"}>UK</option>
                            </select>
                        </div>
                        <select name="" id="" className="select_dropdown">
                            <option value="" selected>Select Theme</option>
                            <option value="">Message Theme</option>
                        </select>
                        <textarea name="" id="" rows={5} className="textarea_style" placeholder="Write your message here" />
                        <button type="submit" className="default_maroon_btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  );
};

export default PostJob;