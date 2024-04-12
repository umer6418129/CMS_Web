import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-profile-image-uploader',
  templateUrl: './profile-image-uploader.component.html',
  styleUrls: ['./profile-image-uploader.component.css'],
})
export class ProfileImageUploaderComponent {
  @Input() data: any;
  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement) {
    const files = target.files || [];
    const reader = new FileReader();
    const holder = target.closest('.pic-holder');
    const wrapper = target.closest('.profile-pic-wrapper');

    if (!holder || !wrapper) {
      console.error('Unable to find pic-holder or profile-pic-wrapper');
      return;
    }

    const currentImgElement = holder.querySelector('.pic') as HTMLImageElement;
    if (!currentImgElement) {
      console.error('Unable to find .pic element within pic-holder');
      return;
    }
    const currentImg = currentImgElement.src;

    // Remove any existing alerts
    const alerts = wrapper.querySelectorAll('[role="alert"]');
    alerts.forEach((alert) => alert.remove());

    if (!files.length || !window.FileReader) {
      console.error('No files selected or FileReader not supported');
      return;
    }

    if (/^image/.test(files[0].type)) {
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        holder.classList.add('uploadInProgress');
        const picElement = holder.querySelector('.pic') as HTMLImageElement;

        if (picElement) {
          picElement.src = reader.result as string;
        }

        const loader = document.createElement('div');
        loader.classList.add('upload-loader');
        loader.innerHTML =
          '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
        holder.appendChild(loader);

        setTimeout(() => {
          holder.classList.remove('uploadInProgress');
          loader.remove();

          const random = Math.random();
          if (random < 0.9) {
            wrapper.innerHTML +=
              '<div class="snackbar show" role="alert"><i class="fa fa-check-circle text-success"></i> Profile image updated successfully</div>';
            target.value = '';
            const alertElement = wrapper.querySelector('[role="alert"]');
            if (alertElement) {
              alertElement.remove();
            }
          } else {
            const picElement = holder.querySelector('.pic') as HTMLImageElement;
            if (picElement) {
              picElement.src = currentImg;
            }
            wrapper.innerHTML +=
              '<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>';
            target.value = '';
            const alertElement = wrapper.querySelector('[role="alert"]');
            if (alertElement) {
              alertElement.remove();
            }
          }
        }, 1500);
      };
    } else {
      wrapper.innerHTML +=
        '<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose a valid image.</div>';
      setTimeout(() => {
        const invalidAlert = wrapper.querySelector('[role="alert"]');
        if (invalidAlert) {
          invalidAlert.remove();
        }
      }, 3000);
    }
  }
}
