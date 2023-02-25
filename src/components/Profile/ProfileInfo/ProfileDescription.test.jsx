import React from "react";
import TestRenderer from "react-test-renderer";
import ProfileDescription from "./ProfileDescription";

describe("ProfileDescription component", () => {
    test("status from props should be in the state", () => {
        const component = TestRenderer.create(<ProfileDescription status="in-moment.com" />);
        const instance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        expect(instance.findByType(ProfileDescription).state.status).toBe("in-moment.com");
    });
    test("after creation <span> should be displayed", () => {
        const component = TestRenderer.create(<ProfileDescription status="in-moment.com" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <span> should contains correct status", () => {
        const component = TestRenderer.create(<ProfileDescription status="in-moment.com" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span.children[0]).toBe("in-moment.com");
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = TestRenderer.create(<ProfileDescription status="in-moment.com" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType("input");
        }).toThrow();
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = TestRenderer.create(<ProfileDescription status="in-moment.com" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input");
        expect(input.props.value).toBe("in-moment.com");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = TestRenderer.create(<ProfileDescription status="in-moment.com" updateStatus={mockCallback} />);
        const instance = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        instance.findByType("span").props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        instance.findByType("input").props.onBlur();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});


