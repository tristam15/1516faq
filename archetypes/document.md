---
title: "{{ replace .Name "-" " " | title }}"
description: ""
document_type: ""  # e.g., income-certificate, equivalency-certificate
issuer: ""  # e.g., revenue-department, education-board
context: ""  # e.g., telangana, andhra-pradesh
qualifications:  # List of applicable qualifications
  - "10th"
  - "12th"
  - "bachelors"
  - "masters"
  - "phd"
state: ""  # e.g., telangana, andhra-pradesh
fee: ""  # e.g., "₹100" or "Free"
validity: ""  # e.g., "Lifetime" or "1 year"
processing_time: ""  # e.g., "15 working days"

# Required documents
required_documents:
  - "Aadhaar Card"
  - "Ration Card"
  - ""

# Step-by-step process
steps:
  - "Step 1: Download the application form from [website](https://example.com)"
  - "Step 2: Fill in all required details"
  - "Step 3: Attach supporting documents"
  - "Step 4: Submit at the designated office"

# Online portal information (if applicable)
online_portal: ""
online_portal_instructions: ""

# Office locations (if applicable)
offices:
  - name: ""
    address: ""
    contact: ""
    hours: ""
    map_link: ""

# Frequently asked questions
faqs:
  - question: ""
    answer: ""

# Additional notes or warnings
notes: |
  - Processing times may vary based on workload
  - Keep a copy of all submitted documents
  - Always verify information with the official website

# Metadata for SEO and organization
keywords: []
weight: 1000  # Higher weight means higher in the list
draft: false
---

# {{ replace .Name "-" " " | title }}

## Overview

[Provide a brief overview of the document]

## Detailed Instructions

[Provide detailed step-by-step instructions]

## Required Documents

- Document 1
- Document 2

## Processing Time

[Provide information about processing time]

## Fees

[Provide fee details]

## Contact Information

[Provide contact information for queries]
