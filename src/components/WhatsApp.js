import "../index.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsApp() {
  return (
    <>
      <div class="group flex z-10 fixed  bottom-8 right-8 items-center">
        <p class="invisible group-hover:visible group-hover:scale-100 scale-0 duration-300 bg-green-500 inline-block px-3 mr-3 rounded-xl text-[14px] text-white  ">
          Whatsapp us
        </p>
        <div class="whatsappflex justify-center items-center bg-green-500 rounded-lg ">
          <a
            class="whatsapp-icon "
            href="https://api.whatsapp.com/send/?phone=919324441334&text&type=phone_number&app_absent=0"
          >
            <WhatsAppIcon
              style={{ color: "#ffffff", fontSize: "2.5rem", margin: "3px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
