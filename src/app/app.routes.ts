import { Routes } from '@angular/router';
import { Idea } from './idea/idea';
import { OverallProblem } from './idea/overall-problem/overall-problem';
import { CurrentState } from './idea/current-state/current-state';
import { DoneSoFar } from './idea/done-so-far/done-so-far';
import { NextActions } from './idea/next-actions/next-actions';
import { Alternatives } from './alternatives/alternatives';
import { Graphrag } from './alternatives/graphrag/graphrag';
import { KetRag } from './alternatives/ket-rag/ket-rag';
import { RagVsGraphrag } from './rag-vs-graphrag/rag-vs-graphrag';
import { WhatIsRag } from './rag-vs-graphrag/what-is-rag/what-is-rag';
import { WhyNeeded } from './rag-vs-graphrag/why-needed/why-needed';
import { BasicRag } from './rag-vs-graphrag/basic-rag/basic-rag';
import { Problems } from './rag-vs-graphrag/problems/problems';

export const routes: Routes = [
  { path: '', redirectTo: 'idea', pathMatch: 'full' },
  {
    path: 'idea',
    component: Idea,
    children: [
      { path: '', redirectTo: 'overall-problem', pathMatch: 'full' },
      { path: 'overall-problem', component: OverallProblem },
      { path: 'current-state', component: CurrentState },
      { path: 'done-so-far', component: DoneSoFar },
      { path: 'next-actions', component: NextActions },
    ],
  },
  {
    path: 'alternatives',
    component: Alternatives,
    children: [
      { path: '', redirectTo: 'graphrag', pathMatch: 'full' },
      { path: 'graphrag', component: Graphrag },
      { path: 'ket-rag', component: KetRag },
    ],
  },
  {
    path: 'rag-vs-graph-rag',
    component: RagVsGraphrag,
    children: [
      { path: '', redirectTo: 'what-is-rag', pathMatch: 'full' },
      { path: 'what-is-rag', component: WhatIsRag },
      { path: 'why-needed', component: WhyNeeded },
      { path: 'basic-rag', component: BasicRag },
      { path: 'problems', component: Problems },
    ],
  },
];
