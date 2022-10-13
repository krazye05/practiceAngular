import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-custom-table-sort',
    template: `


        <svg [ngStyle] = "{'transform': [null, undefined, 'ASC'].includes(sortValue) ? null :'rotate(180deg)', 'opacity': ![null, undefined].includes(sortValue)  ? '1' : null}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z"/> <svg:path
                class="fa-secondary"
                [attr.d]="
                  'M292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 ' +
                  ([null, undefined].includes(sortValue)
                    ? '288z'
                    : '288zM160.1 400L113.6 352h92.95L160.1 400z')
                "
              ></svg:path></svg>


    `

})
// [ngStyle] = "{'transform': sortValue ==='ASC' || sortValue === null ? 'unset' :'rotate(180deg)', 'opacity': sortValue !== null  ? '1' :false}"

export class CustomTableSort {
    @Input() sortValue: "ASC" | "DESC" | null = null
}