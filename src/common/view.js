class Baseview extends Lego.View {
    constructor(opts = {}) {
        const options = {
            events: null
        };
        Object.assign(options, opts);
        super(options);
        this.setEvent();
        this.renderScroll();
    }
    renderScroll(){
        const options = this.options,
            that = this;
        // 是否渲染滚动条
        if (options.scrollbar) {
            const scrollbarEl = this.$('.scrollbar').length ? this.$('.scrollbar') : (this.$el.hasClass('scrollbar') ? this.$el : []);
            if(scrollbarEl.length){
                scrollbarEl.each(function(index, el){
                    const container = $(this),
                        eventName = "mousemove.ps" + index;
                    container.css('position', 'relative');
                    Ps.initialize(container[0], options.scrollbar);
                    that.$el.off(eventName).on(eventName, function() {
                        Ps.update(container[0]);
                    });
                });
            }
        }
    }
    /**
     * [setEvent 设置dom]
     * @param {[type]} element [description]
     */
    setEvent() {
        this.unBindEvents();
        this.delegateEvents();
        return this;
    }
    bindEvents(eventName, selector, listener){
        this.$el.on(eventName + '.delegateEvents' + this.options.vid, selector, listener);
        return this;
    }
    unBindEvents() {
        if (this.$el) this.$el.off('.delegateEvents' + this.options.vid);
        return this;
    }
    /**
     * [delegateEvents 通过解析配置绑定事件]
     * @return {[type]} [description]
     */
    delegateEvents() {
        const events = this.options.events;
        if (!events) return this;
        for (let key in events) {
            let method = events[key];
            if (typeof method !== 'function') method = this[method];
            if (!method) continue;
            let match = key.match(delegateEventSplitter);
            this.bindEvents(match[1], match[2], method.bind(this));
        }
        return this;
    }
}
Lego.components('Baseview', Baseview);
export default Baseview;
