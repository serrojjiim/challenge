import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CharacterDetailComponent {
  private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  readonly character$ = this.route.paramMap.pipe(
    switchMap(params =>
      this.characterService.getCharacterById(Number(params.get('id')))
    )
  );
}
