import { FocusableOption } from '@angular/cdk/a11y';
import { 
  ChangeDetectionStrategy, 
  Component, 
  ElementRef, 
  EventEmitter,
  Input, 
  Output,
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { FasTabComponent } from './tab.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tab-item',
  imports: [RouterLink],
  template: `
    <a
      #tabLink
      [id]="tab.id + '-label'"
      routerLink="./"
      [fragment]="tab.id"
      [attr.aria-controls]="tab.id"
      [attr.aria-selected]="tab.active"
      [attr.tabindex]="disabled ? -1 : 0"
      role="tab"
      (click)="onTabClick()"
      (keydown)="onKeydown($event)"
    >{{ tab.title }}</a>
  `,
})
export class FasTabItemComponent implements FocusableOption {
  @Input() tab!: FasTabComponent;
  @Input() disabled = false;
  @Output() tabSelected = new EventEmitter<FasTabComponent>();

  @ViewChild('tabLink', { static: true })
  private tabLink!: ElementRef<HTMLAnchorElement>;

  onTabClick(): void {
    this.onSelect();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onSelect();
    }
  }

  private onSelect(): void {
    this.tabSelected.emit(this.tab);
  }

  focus(): void {
    this.tabLink.nativeElement.focus();
  }

  getLabel(): string {
    return this.tab.title;
  }
}