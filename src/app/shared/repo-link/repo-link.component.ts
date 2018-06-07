import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-link',
  templateUrl: './repo-link.component.html',
  styleUrls: ['./repo-link.component.scss']
})
export class RepoLinkComponent {
  @Input() path;
  repoUrl = 'https://github.com/nowzoo/ngx-strap';


}
