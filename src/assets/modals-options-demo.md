```html
<ng-template ngxStrapModal #noAnimModal="ngxStrapModal">
  <!-- Disable animation:  remove .fade class from .modal  -->
  <div class="modal" id="exampleModalNoAnimation" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalNoAnimationLabel" aria-hidden="true">
    ...
  </div>
</ng-template>


<ng-template ngxStrapModal #smallModal="ngxStrapModal">
  <div class="modal fade" id="exampleModalSmall" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalSmallLabel" aria-hidden="true">
    <!-- Small size: add  .modal-sm to .modal-dialog -->
    <div class="modal-dialog modal-sm" role="document">
      ....
    </div>
  </div>
</ng-template>

<ng-template ngxStrapModal #lgModal="ngxStrapModal">
  <div class="modal fade" id="exampleModalNoBackdrop" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalNoBackdropLabel" aria-hidden="true">
    <!-- Large size: add  .modal-lg to .modal-dialog -->
    <div class="modal-dialog modal-lg" role="document">
      ...
    </div>
  </div>
</ng-template>

<ng-template ngxStrapModal #centeredModal="ngxStrapModal">
  <div class="modal fade" id="exampleModalCentered" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
    <!-- Centered in viewport: add  .modal-dialog-centered to .modal-dialog -->
    <div class="modal-dialog modal-dialog-centered" role="document">
      ...
    </div>
  </div>
</ng-template>

<ng-template ngxStrapModal #noBackdropModal="ngxStrapModal">
  <!-- Remove backdrop:  data-backdrop="false"  -->
  <div class="modal fade" id="exampleModalNoBackdrop" tabindex="-1" role="dialog"
    data-backdrop="false"
    aria-labelledby="exampleModalNoBackdropLabel" aria-hidden="true">
    ....
  </div>
</ng-template>

<ng-template ngxStrapModal #staticBackdropModal="ngxStrapModal">
  <!-- Static backdrop:  data-backdrop="static"  -->
  <div class="modal fade" id="exampleModalStaticBackdrop" tabindex="-1" role="dialog"
    data-backdrop="static"
    aria-labelledby="exampleModalStaticBackdropLabel" aria-hidden="true">
    ...
  </div>
</ng-template>

<ng-template ngxStrapModal #noKeyboardModal="ngxStrapModal">
  <!-- Don't close on escape key:  data-keyboard="false"  -->
  <div class="modal fade" id="exampleModalNoKeyboard" tabindex="-1" role="dialog"
    data-keyboard="false"
    aria-labelledby="exampleModalNoKeyboardLabel" aria-hidden="true">
    ...
  </div>
</ng-template>

<ng-template ngxStrapModal #noFocusModal="ngxStrapModal">
  <!-- Don't focus the modal on show:  data-focus="false"  -->
  <div class="modal fade" id="exampleModalNoFocus" tabindex="-1" role="dialog"
    data-focus="false"
    aria-labelledby="exampleModalNoFocusLabel" aria-hidden="true">
    ...
  </div>
</ng-template>
```
