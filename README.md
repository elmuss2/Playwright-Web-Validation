# **Playwright Web Validator**

This repository contains a robust, data-driven test automation framework built with Playwright. It validates critical features and task workflows for a demo application, ensuring functionality across multiple application modules. The project emphasizes scalability, maintainability, and dynamic test generation.

---

## **Key Features**

- **Login Automation**  
  Seamless login implementation for the demo app using provided credentials.

- **Test Scenarios**  
  End-to-end validation of tasks and their associated metadata (e.g., tags, status) across different application modules:
  - **Web Application**
  - **Mobile Application**

- **Dynamic Test Generation**  
  Test cases are driven by structured JSON data, allowing for easy expansion and maintenance without duplicating code.

- **Scalability**  
  Modular design ensures future requirements and features can be integrated efficiently.

---

## **Test Cases Overview**

This test suite validates the following scenarios dynamically:

1. **Task Status Verification**
   - Validate tasks in the **To Do**, **In Progress**, and **Done** columns for both Web and Mobile applications.

2. **Tag Validation**
   - Ensure tasks are tagged correctly with categories like **Feature**, **Bug**, **Design**, and **High Priority**.

3. **Dynamic Execution**
   - All checks are executed dynamically based on JSON-defined scenarios, minimizing code duplication and improving flexibility.

---

## **Tech Stack**

- **[Playwright](https://playwright.dev/):** Core automation framework for browser testing.
- **JavaScript/TypeScript:** Programming language for test implementation.
- **JSON:** Data source for driving test cases dynamically.

---


