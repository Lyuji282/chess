/*
 * Chess App using React and Web Workers
 * Copyright (C) 2019 mhonert (https://github.com/mhonert)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { findBestMove } from './engine';

export function calculateMove(board, playerColor, depth) {
  console.log('Start calculation of move ...');
  const move = findBestMove(board, playerColor, depth);
  console.log('Calculation finished', move.score);

  return {
    start: move.start,
    end: move.end,
    piece: {
      id: move.piece.id,
      name: move.piece.name
    }
  };
}