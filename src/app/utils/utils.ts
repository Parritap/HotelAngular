import Swal from "sweetalert2";

export class Utils{


  static showAlertSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: '¡' + message + '!',
      background: '#252525',
      color: '#fff',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      timer: 3000,
      timerProgressBar: true,
    });
  }



  public static showAlertError(message:string): void {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: '¡' + message + '!',
      background: '#252525',
      color: '#fff',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      timer: 3000,
      timerProgressBar: true,
    });
  }
  
}
