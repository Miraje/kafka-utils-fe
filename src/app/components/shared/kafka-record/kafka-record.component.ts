import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { KafkaRecord } from 'models/kafkaRecord.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { CodeSnippetComponent } from 'components/shared/code-snippet/code-snippet.component';
import { MatDivider } from '@angular/material/divider';
import { HighlightPipe } from 'pipes/highlight.pipe';

@Component({
  selector: 'app-kafka-record',
  standalone: true,
  templateUrl: './kafka-record.component.html',
  styleUrl: './kafka-record.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    DatePipe,
    CodeSnippetComponent,
    MatDivider,
    HighlightPipe,
  ],
})
export class KafkaRecordComponent {
  @Input() record: KafkaRecord;
  @Input() numberOfMessage: number;
  @Input() numberOfTotalMessages: number;
}
