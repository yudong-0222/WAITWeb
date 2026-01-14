import Swal from "sweetalert2";
export const handlePlayNow = () => {
  Swal.fire({
    title:
      '<span class="font-mono text-[#00FF96]">SYSTEM_STATUS: OFFLINE</span>',
    html: `
      <div class="text-left font-mono space-y-4 p-2">
        <div class="space-y-1">
          <p class="text-xs text-gray-500 uppercase tracking-widest">>> Project Progress</p>
          <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-[#00FF96] w-[93%] animate-pulse"></div>
          </div>
          <p class="text-[10px] text-right text-[#00FF96]">93.1% COMPLETE</p>
        </div>
        
        <p class="text-sm text-gray-300 leading-relaxed">
          偵測到連線請求... <br/>
          <span class="text-red-500">錯誤：遠端主機已強制關閉一個現存的連線。</span><br/>
          目前仍處於開發階段，加入 Discord 獲取測試資格與更新資訊。
        </p>
      </div>
    `,
    background: "#1a1c20",
    color: "#fff",
    showCancelButton: true,
    confirmButtonText: "JOIN DISCORD",
    cancelButtonText: "BACK TO MENU",
    confirmButtonColor: "#5865F2",
    cancelButtonColor: "transparent",
    heightAuto: false,
    scrollbarPadding: false,
    customClass: {
      popup: "border border-white/10 rounded-xl shadow-2xl",
      confirmButton: "px-6 py-2 font-bold tracking-widest uppercase text-xs",
      cancelButton:
        "px-6 py-2 font-bold tracking-widest uppercase text-xs text-gray-500 underline",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://discord.gg/RNJQFYbjVp", "_blank");
    }
  });
};
