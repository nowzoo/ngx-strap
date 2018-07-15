import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxStrapTabsComponent } from './tabs.component';
import { NgxStrapTabDirective } from './tab.directive';

describe('NgxStrapTabsComponent', () => {
  let component: NgxStrapTabsComponent;
  let fixture: ComponentFixture<NgxStrapTabsComponent>;
  let jQuery: any;
  let $el: any;

  beforeEach(async(() => {
    $el = {
      on: jasmine.createSpy(),
      tab: jasmine.createSpy()
    };
    jQuery = window['jQuery'] = jasmine.createSpy().and.returnValue($el);
    TestBed.configureTestingModule({
      declarations: [ NgxStrapTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStrapTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('should listen to the events', () => {
      expect($el.on).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
    });
  });

  describe('handleEvent(event)', () => {
    let ngUnsubscribe: Subject<void>;
    let lastEvent;
    let currentTab;
    afterEach(() => {
      ngUnsubscribe.next();
      ngUnsubscribe.complete();
    });
    beforeEach(() => {
      ngUnsubscribe = new Subject<void>();
      component.events.pipe(takeUntil(ngUnsubscribe)).subscribe(val => lastEvent = val);
      component.shown.pipe(takeUntil(ngUnsubscribe)).subscribe(val => currentTab = val);

    });
    it('should push the event', () => {
      const event: any = {type: 'shown', target: {id: component.linkIdFromTabId('foo')}};
      component.handleEvent(event);
      expect(lastEvent).toBe(event);
    });
    it('should emit the tabId in shownTab on shown', () => {
      const event: any = {type: 'shown', target: {id: component.linkIdFromTabId('foo')}};
      component.handleEvent(event);
      expect(currentTab).toBe('foo');
    });
    it('should emit null in shownTab on hidden', () => {
      const event: any = {type: 'hidden', target: {id: component.linkIdFromTabId('foo')}};
      component.handleEvent(event);
      expect(currentTab).toBe(null);
    });
  });

  describe('show(tabId, event?)', () => {
    it('should select the right tab, after a timeout', fakeAsync(() => {
      component.show('foo');
      tick();
      expect(jQuery).toHaveBeenCalledWith('#' + component.linkIdFromTabId('foo'), (component as any).elementRef.nativeElement);
    }));
    it('should call tab with show, after a timeout', fakeAsync(() => {
      component.show('foo');
      tick();
      expect($el.tab).toHaveBeenCalledWith('show');
    }));
    it('should cancel the event if passed', () => {
      const event: any = {preventDefault: jasmine.createSpy()};
      component.show('foo', event);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('updateTabs()', () => {

    it('should set tabs', () => {
      component.tabDirectives = [
        {tabId: 'foo', tabTitle: 'Foo', active: true, templateRef: {}},
        {tabId: 'bar', tabTitle: 'Bar', templateRef: {}}
      ] as any;
      component.updateTabs();
      expect(component.tabs[0]).toEqual({tabId: 'foo', title: 'Foo', initiallyActive: true, titleTemplate: null, tabTemplate: {}});
      expect(component.tabs[1]).toEqual({tabId: 'bar', title: 'Bar', initiallyActive: false, titleTemplate: null, tabTemplate: {}});
    });

    it('should set default titles', () => {
      component.tabDirectives = [
        {tabId: 'foo', active: true, templateRef: {}},
        {tabId: 'bar', templateRef: {}}
      ] as any;
      component.updateTabs();
      expect(component.tabs[0]).toEqual({tabId: 'foo', title: 'Tab #0', initiallyActive: true, titleTemplate: null, tabTemplate: {}});
      expect(component.tabs[1]).toEqual({tabId: 'bar', title: 'Tab #1', initiallyActive: false, titleTemplate: null, tabTemplate: {}});
    });


    it('should handle title directives', () => {
      component.tabTitleDirectives = [
        {tabId: 'foo', templateRef: {}},
        {tabId: 'bar', templateRef: {}}
      ] as any;
      component.tabDirectives = [
        {tabId: 'foo', tabTitle: 'Foo', active: true, templateRef: {}},
        {tabId: 'bar', tabTitle: 'Bar', templateRef: {}}
      ] as any;
      component.updateTabs();
      expect(component.tabs[0]).toEqual({tabId: 'foo', title: 'Foo', initiallyActive: true, titleTemplate: {}, tabTemplate: {}});
      expect(component.tabs[1]).toEqual({tabId: 'bar', title: 'Bar', initiallyActive: false, titleTemplate: {}, tabTemplate: {}});
    });

    it('should show the active tab if specified', () => {
      spyOn(component, 'show').and.callFake(() => {});
      component.tabDirectives = [
        {tabId: 'foo', tabTitle: 'Foo', templateRef: {}},
        {tabId: 'bar', tabTitle: 'Bar', active: true, templateRef: {}}
      ] as any;
      component.initialized = false;
      component.updateTabs();
      expect(component.show).toHaveBeenCalledWith('bar');
    });
    it('should show the active tab if none specified', () => {
      spyOn(component, 'show').and.callFake(() => {});
      component.tabDirectives = [
        {tabId: 'foo', tabTitle: 'Foo', templateRef: {}},
        {tabId: 'bar', tabTitle: 'Bar', templateRef: {}}
      ] as any;
      component.initialized = false;
      component.updateTabs();
      expect(component.show).toHaveBeenCalledWith('foo');
    });
  });

  describe('paneIdFromTabId(tabId)', () => {
    it('should return a string', () => {
      expect(component.paneIdFromTabId('foo')).toBe(component.componentId + '-foo-pane' );
    });
  });
  describe('linkIdFromTabId(tabId)', () => {
    it('should return a string', () => {
      expect(component.linkIdFromTabId('foo')).toBe(component.componentId + '-foo-link' );
    });
  });
  describe('tabIdFromLinkId(linkId)', () => {
    it('should return a string', () => {
      const linkId = component.componentId + '-foo-link';
      expect(component.tabIdFromLinkId(linkId)).toBe('foo');
    });
  });

});
