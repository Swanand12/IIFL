import "../index.css";

export default function WhatsApp() {
  return (
    <>
      <div class="group flex fixed bottom-8 right-8 items-center">
        <p class="invisible group-hover:visible group-hover:scale-100 scale-0 duration-300 bg-green-500 inline-block  h-7 px-4 mr-3 rounded-xl text-lg text-white  ">
          Whatsapp us
        </p>
        <div class="whatsapp w-14 h-14  flex justify-center items-center bg-green-500 rounded-xl ">
          <a
            class="whatsapp-icon "
            href="https://api.whatsapp.com/send/?phone=919324441334&text&type=phone_number&app_absent=0"
          >
            <i class="fab fa-whatsapp fa-3x text-white"></i>
          </a>
        </div>
      </div>
    </>                                                                 
  );
}
