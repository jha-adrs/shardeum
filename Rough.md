# Social Media for Researchers on Web3

This platform is a decentralized social media designed specifically for researchers. It provides a space for researchers to meet, collaborate, and share research datasets. Leveraging the power of blockchain technology, it ensures transparency, security, and ownership of data.

## Components

### User Component

This component handles user registration, authentication, and profile management. Each user is identified by their wallet address. The profile includes details such as the user's name, affiliation, research interests, and published datasets.

### Dataset Component

This component manages the datasets shared by the users. It includes functions for uploading, downloading, and managing datasets. Each dataset is associated with metadata including the title, description, date of publication, and associated keywords. Users can search for datasets based on these metadata.

### Collaboration Component

This component facilitates collaboration between researchers. It includes features like messaging, project management, and joint ownership of datasets. Researchers can send collaboration requests to other users, manage ongoing projects, and communicate directly within the platform.

## Data Flow

1. User connects their wallet and signs in. The wallet address is used as a unique identifier for the user.
2. User navigates to the dataset component and uploads a dataset. The dataset is associated with metadata provided by the user.
3. The dataset is stored as an NFT on the blockchain. This ensures the user's ownership of the dataset and its immutability.
4. Other users can view, download, or request to collaborate on the dataset. Collaboration requests are handled by the smart contract.

## Smart Contract

The smart contract is the backbone of the platform. It handles user registration, dataset management, and collaboration requests.

### User Registration

When a user signs in for the first time, the smart contract creates a new user struct with the user's wallet address as the identifier. This struct is stored in a mapping from addresses to user structs.

### Dataset Management

When a user uploads a dataset, the smart contract creates a new dataset struct and assigns ownership to the user. The dataset is stored as an NFT, ensuring the user's ownership and the dataset's immutability. The dataset struct is stored in a mapping from NFT IDs to dataset structs.

### Collaboration

When a user requests to collaborate on a dataset, the smart contract facilitates the collaboration by updating the dataset struct to include the new collaborator. The collaborator is added to an array of addresses associated with the dataset.

## Models and Structs

### User Struct

The user struct includes fields for the user's wallet address, datasets owned, and collaborations. The datasets owned and collaborations are arrays of NFT IDs.

### Dataset Struct

The dataset struct includes fields for the dataset's metadata, owner, and collaborators. The metadata is a struct that includes the title, description, date of publication, and associated keywords. The owner and collaborators are addresses.

## Connecting and Uploading NFT-based Papers

Users can connect their wallet to the platform and upload their research papers as NFTs. This ensures the user's ownership of their work and allows other researchers to easily find and collaborate on the paper. The paper is associated with metadata provided by the user, and it can be searched for based on this metadata.