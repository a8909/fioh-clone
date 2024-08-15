import { Component, Input } from '@angular/core';
import { DropDown } from '../../../shared/dropDown.directive';
import { CommonModule } from '@angular/common';
import { TabsService } from '../../../tabs.service';
@Component({
  selector: 'app-create-memorial',
  standalone: true,
  imports: [DropDown, CommonModule],
  templateUrl: './create-memorial.component.html',
  styleUrl: './create-memorial.component.scss',
})
export class CreateMemorialComponent {
  @Input() errorMessage: string = 'size is bigger than specification';
  Gender = ['Male', 'Female', 'Rather not to say'];
  isOpen: boolean = false;
  ct: string = 'about';
  accept = 'images/.svg, .png, .gif, .jpg';
  selectedFile: File;
  imageUrl: string | ArrayBuffer;
  disable: boolean = false;
  maxWidth: number = 800;
  maxHeight: number = 400;

  constructor(private tabs: TabsService) {
    // this.tabs.showTab(this.ct);
  }
  bars(bar: string) {
    this.ct = bar;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }
  onSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log(this.selectedFile);
      if (this?.selectedFile.size > this.maxWidth) {
        console.log(this.selectedFile.size + 'size should be 800 by 400px ');
        this.disable = true;
        setInterval(() => {
          this.errorMessage = null;
        }, 2000);
        return;
      }
      this.previewImage(this?.selectedFile);
      return;
    }
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
    };
    return reader.readAsDataURL(file);
  }

  onCancel() {
    this.selectedFile = null;
  }
}
