This repository contains a robust, data-driven automated test suite for the login functionality of the Sauce Demo website. It is built with Playwright and TypeScript, showcasing best practices like the Page Object Model (POM) and a clear separation of test data from test logic.

Table of Contents
Features
Project Structure
Prerequisites
Installation
Running the Tests
Test Data Structure
Features
Data-Driven by Design: Test cases are defined in testdata/loginData.json, allowing for easy scaling and management of test scenarios without altering test code.
Page Object Model (POM): The pages/LoginPage.js class encapsulates page selectors and actions, leading to cleaner, more maintainable tests.
Comprehensive Coverage: The suite is organized into three distinct categories to ensure thorough testing:
Functional Scenarios: Core login functionality and validation.
Boundary Scenarios: Testing with edge-case input values.
Security Scenarios: Basic checks for common vulnerabilities like SQL Injection and XSS.
Organized Test Suites: Tests in tests/login.spec.js are grouped using test.describe for clarity and better organization.
Built-in Reporting: Leverages Playwright's powerful HTML reporter to provide detailed insights into test execution results.
