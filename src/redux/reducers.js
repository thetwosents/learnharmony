import {action} from "./constants";
import allContent from '../content.json';
import {generateContentNavOptions} from '../helpers/content';

function contentForRoute(route) {
    const actualRoute = route === '/' ? 'home' : route;
    return allContent.find(page => page.route === actualRoute);
}

function content(state=[]) {
    return allContent;
}

function contentOptions(state=[]) {
    return generateContentNavOptions(allContent)
      .filter(page => page.navGroup === ".lessons")
      .map(page => ({route: page.route, title: page.title}));
}

function page(state={}, {type, route}) {
    switch(type) {
        case action.CHANGE_ROUTE:
            return contentForRoute(route);

        default:
            return state;
    }
}

function code(state="", {type, code, route}) {
    switch (type) {
        case action.CHANGE_ROUTE:
            const content = contentForRoute(route);
            return (content && content.code) || code;

        case action.UPDATE_CODE:
            return code;

        default:
            return state;
    }
}

function consoleLog(state=[], {type, text}) {
    switch (type) {
        case action.CONSOLE_LOG:
            return [
                ...state,
                text
            ];

        default:
            return state;
    }
}

export default {
    content,
    contentOptions,
    page,
    code,
    consoleLog,
};