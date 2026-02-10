import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from 'rxjs';

import { CharacterService } from '../../services/character.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  private characterService = inject(CharacterService);

  searchControl = new FormControl('', { nonNullable: true });

  private readonly sortOrder$ = new BehaviorSubject<'asc' | 'desc'>('asc');

  private filteredCharacters$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((searchTerm) =>
      this.characterService.getCharacters(1, searchTerm).pipe(map((response) => response.results)),
    ),
  );

  readonly characters$ = combineLatest([this.filteredCharacters$, this.sortOrder$]).pipe(
    map(([characters, order]) => {
      return [...characters].sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    }),
  );

  toggleSort(order: 'asc' | 'desc'): void {
    this.sortOrder$.next(order);
  }
}
