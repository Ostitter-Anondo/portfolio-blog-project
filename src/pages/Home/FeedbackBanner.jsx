import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const FeedbackBanner = () => {
  return (
    <>
      <div className="w-11/12 lg:w-8/12 mx-auto bg-neutral rounded-lg grid lg:grid-cols-2 gap-12 lg:gap-0 p-2 lg:p-8 my-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(
              "I see you want to feed me back but I am extremely sorry to inform you that receiving feedback costs money I do not have, so just deal with it!"
            );
          }}
          className="lg:border-r-2 pr-6 border-base-300 flex flex-col gap-3 items-center"
        >
          <h3 className="font-semibold text-lg text-primary text-center">
            Have something to say? Say it here!
          </h3>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <IoMdMail />
            <input type="text" className="grow" placeholder="Email" required />
          </label>
          <textarea
            className="textarea textarea-lg textarea-accent w-full"
            placeholder="Bio"
            required
          ></textarea>
          <button className="btn btn-success btn-sm w-full" type="submit">
            Give Feedback!
          </button>
        </form>
        <div className="lg:border-l lg:pl-6 border-base-300">
          <div className="mx-auto w-fit h-full">
            <h3 className="font-semibold text-2xl text-primary">My Contacts</h3>
            <ul className="m-6 flex flex-col gap-6">
              <li className="flex text-lg items-center gap-3">
                <FaEnvelope />
                <p><a href="mailto:jawad.i.mamoon@gmail.com">jawad.i.mamoon@gmail.com</a></p>

              </li>
              <li className="flex text-lg items-center gap-3">
                <FaPhone />
                <a
                  className="hover:underline"
                  href="tel:+8801886318799"
                  target="_blank"
                >
                  +880 1886-318799
                </a>
              </li>
              <li className="flex text-lg items-center gap-3">
                <FaWhatsapp />
                <a
                  className="hover:underline"
                  href="https://api.whatsapp.com/send?phone=8801886318799"
                  target="_blank"
                >
                  +880 1886-318799
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default FeedbackBanner;
