/**
 * 回复框
 * ronghui Yu
 * 2017/1/17
 */
import './asset/index.scss';
import Facial from '../facial/index';
import Popover from '../popover/index';
import Upload from '../upload/index';

class Reply extends Lego.UI.Baseview {
    constructor(opts = {}) {
        const options = {
            events: {
                'focus .lego-reply-content': 'onFocus',
                'blur .lego-reply-content': 'onblur',
                'click .lego-reply-submit': 'onSubmit',
                'click .lego-reply-annex': 'showUpload',
                'click .popover-title i': 'showUpload',
                'keydown .lego-reply-content': '_enterSearch'
            },
            inputType: 'textarea',   //输入框类型  textarea或div
            placeholder: '请输入回复内容', //
            contentHeight: 70,  //输入框高度
            showFacial: true,   //显示表情
            showUpload: true,   //显示上传文件
            uploadDataSource: null,    //上传文件token数据源
            iconsUrl: '',
            submitText: '回复',   //
            onSubmit(){},  //事件回调
            onUploaded(){},
            components: []
        };
        Object.assign(options, opts);
        if(options.showFacial){
            options.components.push({
                el: '#facial-' + options.vid,
                target: '#content-' + options.vid,
                targetType: options.inputType,
                iconsUrl: options.iconsUrl
            });
        }
        if(options.showUpload){
            options.components.push({
                el: '#upload-' + options.vid,
                dataSource: options.uploadDataSource,
                onComplete(self, result) {
                    if(typeof options.onUploaded == 'function') options.onUploaded(self, result);
                }
            });
        }
        super(options);
        this.placeholder = '<span class="lego-reply-ph">' + this.options.placeholder + '</span>';
    }
    render() {
        const options = this.options;
        const vDom = hx`
        <div class="lego-reply">
            ${options.inputType == 'div' ? hx`
            <div class="lego-reply-content" id="content-${options.vid}"><span class="lego-reply-ph">${val(options.placeholder)}</span></div>
            ` : hx`
            <textarea placeholder="${val(options.placeholder)}" class="form-control lego-reply-content" id="content-${options.vid}"></textarea>
            `}
            <button type="button" class="btn btn-primary lego-reply-submit">${val(options.submitText)}</button>
            <div class="lego-reply-toolbar">
                ${options.showFacial ? hx`<facial id="facial-${options.vid}"></facial>` : ''}
                ${options.showUpload ? hx`<div id="annex-${options.vid}" class="lego-reply-annex"><i class="anticon anticon-paper-clip"></i></div>` : ''}
            </div>
            <div class="popover popover-bottom" style="display:none;">
                <div class="popover-arrow"></div><h3 class="popover-title">上传附件 <i class="anticon anticon-close" style="float:right"></i></h3>
                <div class="popover-content"><upload id="upload-${options.vid}"></upload></div>
            </div>
        </div>
        `;
        return vDom;
    }
    renderAfter(){
        this.$el.find('.lego-reply-content').attr('contenteditable', 'true').height(this.options.contentHeight);
    }
    onFocus(event){
        const target = $(event.currentTarget);
        if(target.find('.lego-reply-ph').length) target.html('');
    }
    onblur(event){
        const target = $(event.currentTarget),
            options = this.options;
        if(!target.text() && !target.find('img').length && options.inputType == 'div') target.html(this.placeholder);
    }
    showUpload(event){
        this.$el.find('.popover').toggleClass('show');
    }
    _enterSearch(event) {
        const target = $(event.currentTarget),
            options = this.options;
        if (event.which === 13) {
            if (!event.ctrlKey) {
                this.onSubmit(event);
            }
            if (event.ctrlKey) {
                Lego.UI.Util.insertText(target, Lego.UI.Util.checkBrowser().mozilla ? '<br>' : '<br><br>');
            }
        }
    }
    onSubmit(event){
        event.stopPropagation();
        const contentEl = this.$el.find('.lego-reply-content');
        let contentHtml = this.options.inputType == 'div' ? contentEl.html() : contentEl.val();
        contentHtml = this.options.inputType == 'div' ? Lego.UI.Util.faceToText(contentHtml, this.options.iconsUrl) : contentHtml;
        if(this.options.inputType == 'div'){
            contentEl.html(this.placeholder);
        }else{
            contentEl.val('');
        }
        contentHtml = contentHtml == this.placeholder ? '' : contentHtml;
        // console.warn(contentHtml);
        if(typeof this.options.onSubmit == 'function') this.options.onSubmit(this, contentHtml);
    }
}
Lego.components('reply', Reply);
export default Reply;
